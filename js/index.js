
/* ! Sliding List
------------------------- */
var slidingList = function (element) {
    this.list = element;
    this.container = $('.sliding-list__stage', element);
    this.slider = $('.sliding-list__pane-group', element);
    this.count = this.slider.find('.sliding-list__pane').size();
    this.pane = this.slider.find('.sliding-list__pane');
    this.currentPosition = 1;
    this.range = null;
    this.itemWidth = null;
    this.itemByRange = 3;
    this.positionMax = Math.ceil( (this.count - this.itemByRange) + 1) ;
    this.positionId = 0;

    this.nav = '<button type="button" class="previous"> < </button>'+
               '<button type="button" class="next"> > </button>';
    this.isSliding = false;
    this.isRunning = false;

    this.init();
};

slidingList.prototype = {
    init: function () {
        if (this.count > this.itemByRange) {
            this.list.append(this.nav);
            this.list.on('click', 'button', this.slide.bind(this));
            this.list.find('.previous').addClass('is-disabled');
        }
        this.isRunning = true;
        this.resize();
    },

    resize: function(){

        if (!this.isRunning) {
            this.init();
        }
        this.range = 850;
        this.itemWidth = this.range / this.itemByRange;
        this.pane.width(this.itemWidth);
        this.slider.width(this.count * this.itemWidth);

    },

    setContainerOffset: function (percent, animate) {
        this.slider.removeClass('animate');

        if (animate) {
            this.slider.addClass('animate');
        }
        this.slider.css('transform', 'translate3d('+ percent +'%,0,0) scale3d(1,1,1)');

        // if (Modernizr.csstransforms3d) {
        //     this.slider.css('transform', 'translate3d('+ percent +'%,0,0) scale3d(1,1,1)');
        // } else
        // if (Modernizr.csstransforms) {
        //     this.slider.css('transform', 'translate('+ percent +'%,0)');
        // }
        // else {
        //     var px = ((this.itemWidth * this.count) / 100) * percent;
        //     this.slider.css('left', px+'px');
        // }
        var px = ((this.itemWidth * this.count) / 100) * percent;
        this.slider.css('left', px+'px');

    },
    next: function (animate) {
        return this.showPane(this.currentPosition + 1, animate);
    },
    prev: function (animate) {
        return this.showPane(this.currentPosition - 1, animate);
    },
    showPane: function (index, animate) {
        // between the bounds
        index = Math.max(0, Math.min(index, this.cpit, - 1));
        this.currentPosition = index;

        var offset = -((100 / this.count) * this.currentPosition);
        this.setContainerOffset(offset, animate);

    },
    goToPrev: function() {
        var left;
        this.positionId -= 1;
        if (this.positionId < 0) {
            this.positionId = 0;
        }
        left = -(this.positionId * this.itemWidth);
        if (--this.currentPosition < 1) {
            this.currentPosition = 1;
        }
        this.action(left);
    },
    goToNext: function() {
        var left;
        this.positionId += 1;

        if (this.positionId > (this.count - this.itemByRange)) {
            this.positionId = (this.count - this.itemByRange);
        }
        left = -(this.positionId * this.itemWidth);
        if (++this.currentPosition > this.positionMax) {
            this.currentPosition = this.positionMax;
        }
        this.action(left);
    },
    slide: function (event) {
        event.preventDefault();
        var button = $(event.currentTarget);
        if (!this.isSliding) {
            if (button.hasClass('previous')) {
                this.goToPrev();
            } else
            if (button.hasClass('next')) {
                this.goToNext();
            }
        }
    },
    action: function (left) {
        this.isSliding = true;
   		this.slider.css('transform', 'translate3d('+ left +'px,0,0) scale3d(1,1,1)');
            this.isSliding = false;

        if (this.currentPosition === 1 ) {
            this.list.find('.previous').addClass('is-disabled');
            this.list.find('.next').removeClass('is-disabled');
        } else if (this.currentPosition === this.positionMax ) {
            this.list.find('.previous').removeClass('is-disabled');
            this.list.find('.next').addClass('is-disabled');
        } else {
            this.list.find('.previous, .next').removeClass('is-disabled');
        }
    }
};


if($('.sliding-list').get(0)){
    new slidingList($('.sliding-list'));
}