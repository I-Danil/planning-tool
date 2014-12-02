/**
 * Created by danil on 02.12.14.
 */

"use strict";

var PTool = function (el) {
    if (el) {
        React.render(new Application(), el);
    } else {
        console.error("Element for binding is required")
    }
};

var ScheduleView = React.createClass({
    displayName: 'ScheduleView',
    render: function () {
        return React.DOM.div({className: 'pt-schedule-view'},
            ResourcePanel(),
            SchedulePanel(),
            MapPanel()
        );
    }
});

var Scene = React.createClass({
    displayName: 'Scene',
    render: function () {
        return React.DOM.div({className: 'pt-scene'},
            ScheduleView(),
            OrderPanel()
        );
    }
});

/* Layout */
var Application = React.createClass({
    displayName: 'Application',
    render: function () {
        return React.DOM.div({className: 'pt-screen'},
            ToolbarPanel(),
            Scene()
        );
    }
});

new PTool(document.getElementById("pt"));
