(this.webpackJsonptransitYourself=this.webpackJsonptransitYourself||[]).push([[0],{33:function(e,t,a){e.exports=a(62)},38:function(e,t,a){},39:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(30),o=a.n(i),r=(a(38),a(39),a(2)),l=a(14),c=a(9),m=a(10),p=a(12),d=a(11),u=a(1),h=a(13),v=a(4),g=a.n(v);function E(e){return new Date(Date.parse(e)).toLocaleTimeString([],{hour:"numeric",minute:"numeric"})}function b(e){return Math.floor((new Date(Date.parse(e))-new Date)/6e4)}var y=function(e){if("BA"===e.bus.MonitoredVehicleJourney.OperatorRef)return n.a.createElement("div",{className:"bus",id:e.bus.MonitoredVehicleJourney.LineRef},n.a.createElement("div",null,n.a.createElement("span",{className:"bold"},e.bus.MonitoredVehicleJourney.DestinationName),n.a.createElement("span",{className:"white"},"<="," ",e.bus.MonitoredVehicleJourney.OriginName)),n.a.createElement("hr",null),n.a.createElement("div",null,e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime?n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"gray"},E(e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)),n.a.createElement("span",{className:"bold"},E(e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime))):n.a.createElement("span",{className:"bold"},E(e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)),n.a.createElement("div",{className:"countdown"},e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime?n.a.createElement("div",{className:"min-math"},b(e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime)):n.a.createElement("div",{className:"min-math"},b(e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)),n.a.createElement("div",{className:"min"},"min"))));if("CT"===e.bus.MonitoredVehicleJourney.OperatorRef){var t="GY-N";return"Limited"!==e.bus.MonitoredVehicleJourney.LineRef&&"LTD A"!==e.bus.MonitoredVehicleJourney.LineRef&&"LTD B"!==e.bus.MonitoredVehicleJourney.LineRef||(t="YL-N"),"Bullet"===e.bus.MonitoredVehicleJourney.LineRef&&(t="RD-N"),n.a.createElement("div",{className:"bus",id:t},n.a.createElement("div",null,n.a.createElement("span",{title:"Track Vehicle",className:"bold"},e.bus.MonitoredVehicleJourney.VehicleRef?n.a.createElement("span",{className:"gps"},n.a.createElement(r.b,{to:"/vehicular/".concat(e.bus.MonitoredVehicleJourney.OperatorRef,"/").concat(e.bus.MonitoredVehicleJourney.VehicleRef)},e.bus.MonitoredVehicleJourney.LineRef,n.a.createElement("sup",null,"GPS"))):n.a.createElement("span",{className:"no-gps"},e.bus.MonitoredVehicleJourney.LineRef),"=>"),e.bus.MonitoredVehicleJourney.DestinationName),n.a.createElement("hr",null),n.a.createElement("div",null,e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime&&e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime!==e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime?n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"gray"},E(e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)),n.a.createElement("span",{className:"bold"},E(e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime))):n.a.createElement("span",{className:"bold"},E(e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)),n.a.createElement("div",{className:"countdown"},e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime?n.a.createElement("div",{className:"min-math"},b(e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime)):n.a.createElement("div",{className:"min-math"},b(e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)),n.a.createElement("div",{className:"min"},"min"))))}return n.a.createElement("div",{className:"bus"},n.a.createElement("div",null,n.a.createElement("span",{title:"Track Vehicle",className:"bold"},e.bus.MonitoredVehicleJourney.VehicleRef?n.a.createElement("span",{className:"gps"},n.a.createElement(r.b,{to:"/vehicular/".concat(e.bus.MonitoredVehicleJourney.OperatorRef,"/").concat(e.bus.MonitoredVehicleJourney.VehicleRef)},e.bus.MonitoredVehicleJourney.LineRef,n.a.createElement("sup",null,"GPS"))):n.a.createElement("span",{className:"no-gps"},e.bus.MonitoredVehicleJourney.LineRef),"=>"),n.a.createElement("span",{className:"bold"},e.bus.MonitoredVehicleJourney.DestinationName)),n.a.createElement("hr",null),n.a.createElement("div",null,e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime?n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"gray"},E(e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)),n.a.createElement("span",{className:"bold"},E(e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime))):n.a.createElement("span",{className:"bold"},E(e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)),n.a.createElement("div",{className:"countdown"},e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime?n.a.createElement("div",{className:"min-math"},b(e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime)):n.a.createElement("div",{className:"min-math"},b(e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)),n.a.createElement("div",{className:"min"},"min"))))},f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).selectID=function(e){return e.target.select()},a.state={loaded:!1,stopCode:"EMBR",agency:"BA",agencies:[],stopLists:{},stops:[],stopFilter:"",stopsFiltered:[],stop:{Name:"Embarcadero"},buss:[]},a.selectID=a.selectID.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a.loadBusss=a.loadBusss.bind(Object(u.a)(a)),a.loadStops=a.loadStops.bind(Object(u.a)(a)),a.stopListIntegrator=a.stopListIntegrator.bind(Object(u.a)(a)),a.updateStopFilter=a.updateStopFilter.bind(Object(u.a)(a)),a.updateStopCode=a.updateStopCode.bind(Object(u.a)(a)),a.agencyCodeLengthMap={AM:3,PE:3,VC:3,BA:4,EM:4,SA:4,AC:5,CT:5,CC:5,DE:5,FS:5,GF:5,GG:5,MA:5,RV:5,SC:5,SF:5,SR:5,UC:5,VN:5,WC:5,SS:6,WH:6,SM:6,ST:6,TD:6,"3D":6,CE:7,CM:7,SO:7},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://api.511.org/transit/operators?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON").then((function(t){var a=t.data.filter((function(e){return!!e.WebSite}));e.setState({agencies:a})})),this.loadBusss()}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.loadBusss()}},{key:"loadBusss",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.agency,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state.stopCode;g.a.get("https://api.511.org/transit/StopMonitoring?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON&agency=".concat(t,"&stopCode=").concat(a)).then((function(t){var a=t.data.ServiceDelivery.StopMonitoringDelivery.MonitoredStopVisit;e.setState({buss:a})}))}},{key:"updateAgency",value:function(e){var t=this;return function(e){var a,s=e.currentTarget.value,n=[];t.state.stopLists[s]?(a=(n=t.state.stopLists[s])[0],t.setState({stopFilter:"",stopsFiltered:n,stopCode:a.id,buss:[],loaded:!0,stop:a,stops:n,agency:s}),t.loadBusss(s,a.id)):t.setState({agency:e.currentTarget.value,stop:{},stops:[],stopFilter:"",stopsFiltered:[],stopCode:"",buss:[],loaded:!1})}}},{key:"loadStops",value:function(e){var t=this;this.setState({loaded:!0}),g.a.get("".concat("/transitYourself","/stopLists/stopList").concat(this.state.agency,".json")).then((function(e){t.stopListIntegrator(e)})).catch((function(e){g.a.get("https://api.511.org/transit/stops?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON&operator_id=".concat(t.state.agency)).then((function(e){t.stopListIntegrator(e)}))}))}},{key:"stopListIntegrator",value:function(e){var t=this;if("BA"===this.state.agency){var a=e.data.Contents.dataObjects.ScheduledStopPoint.filter((function(e){return!e.id.includes("place")&&!e.Name.includes("Enter/Exit :")})),s=this.state.stopCode||"EMBR",n=a.filter((function(e){return e.id===s.toUpperCase()}))[0]||a.filter((function(e){return"EMBR"===e.id}))[0];this.setState({stopFilter:"",stopsFiltered:a,stopLists:{BA:a},stopCode:n.id,stops:a,stop:n}),this.loadBusss(this.state.agency,n.id)}else{var i=e.data.Contents.dataObjects.ScheduledStopPoint,o=i.filter((function(e){return e.id===t.state.stopCode.toUpperCase()}))[0]||i[0],r=this.state.stopLists;r[this.state.agency]=i,this.setState({stopCode:o.id,stopFilter:"",stopsFiltered:i,stopLists:r,stops:i,stop:o}),this.loadBusss(this.state.agency,o.id)}}},{key:"updateStop",value:function(e){var t=this;return function(e){var a=t.state.stopsFiltered[e.currentTarget.value];t.setState({stopCode:a.id,stop:a}),t.loadBusss(t.state.agency,a.id)}}},{key:"updateStopFilter",value:function(e){var t=this;return function(e){var a=e.currentTarget.value;if(1===a.length&&t.state.stopsFiltered.length<t.state.stops.length&&t.setState({stopsFiltered:t.state.stops}),a.length<3)t.setState({stopFilter:a});else if(a.length<=t.state.stopFilter.length)t.setState({stopFilter:a}),t.state.stopsFiltered.length!==t.state.stops.length&&t.setState({stopsFiltered:t.state.stops});else if(a.length>=3){t.setState({stopFilter:a});var s=a.toLowerCase().split(" "),n=t.state.stopsFiltered.filter((function(e){return s.every((function(t){return e.Name.toLowerCase().includes(t)}))}));if(t.setState({stopsFiltered:n}),n[0]){var i=n[0];t.state.stopCode!==i.id&&(t.setState({stopCode:i.id,stop:i}),t.loadBusss(t.state.agency,i.id))}}}}},{key:"updateStopCode",value:function(e){var t=this;return function(e){var a=e.currentTarget.value;if(a.length<=t.agencyCodeLengthMap[t.state.agency]&&t.setState({stopCode:a}),a.length===t.agencyCodeLengthMap[t.state.agency]){var s=a.toUpperCase();if(g.a.get("https://api.511.org/transit/StopMonitoring?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON&agency=".concat(t.state.agency,"&stopCode=").concat(s)).then((function(e){var a=e.data.ServiceDelivery.StopMonitoringDelivery.MonitoredStopVisit;t.setState({buss:a}),a[0]&&t.setState({stopCode:s})})),t.state.stops){var n=t.state.stops.filter((function(e){return e.id.toUpperCase()===s}))[0];n?t.setState({stopsFiltered:t.state.stops,stopFilter:"",stopCode:s,stop:n}):t.setState({stop:{}})}}}}},{key:"render",value:function(){var e,t,a;if(this.state.loaded&&!this.state.stops[0]?e=n.a.createElement("div",null,n.a.createElement("span",null,"Muni and the VTA have ",n.a.createElement("span",{className:"stops-number"},"~3500")," stops,"),n.a.createElement("br",null),n.a.createElement("span",null,"ACTransit more than ",n.a.createElement("span",{className:"stops-number"},"5000"),".")):this.state.loaded&&this.state.stops[0]&&this.state.stopFilter?e=n.a.createElement("div",null,"Loaded ",n.a.createElement("span",{className:"stops-number"},this.state.stops.length)," stops.",n.a.createElement("br",null),this.state.stopsFiltered.length===this.state.stops.length?"":n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"stops-number"},this.state.stopsFiltered.length)," in Filter.")):this.state.loaded&&this.state.stops[0]&&(e=n.a.createElement("div",null,"Loaded ",n.a.createElement("span",{className:"stops-number"},this.state.stops.length)," stops.",n.a.createElement("br",null))),this.state.agencies){var s=0;t=this.state.agencies.map((function(e){return n.a.createElement("option",{value:e.Id,key:s++},e.ShortName?e.ShortName:e.Name," ",e.ShortName&&e.ShortName!==e.Name?"(".concat(e.Name,")"):"")}))}if(this.state.stopsFiltered){var i=0;a=this.state.stopsFiltered.map((function(e){return n.a.createElement("option",{key:i,value:i++},e.Name," (",e.id,")")}))}var o,l="",c=n.a.createElement("div",{className:"bust"},"No Tracked Vehicles.",n.a.createElement("br",null),n.a.createElement("span",{className:"update",onClick:this.handleSubmit},"Check again"),", check your inputs, or check the schedule.");if(this.state.buss[0]){l=this.state.buss[0].MonitoredVehicleJourney.MonitoredCall.StopPointName;var m=0;c=this.state.buss.map((function(e){return n.a.createElement(y,{bus:e,key:m++})}))}if(this.state.stopCode.length===this.agencyCodeLengthMap[this.state.agency]&&(o=n.a.createElement(r.b,{to:"/anystop/".concat(this.state.agency,"/").concat(this.state.stopCode)},n.a.createElement("div",{className:"map-link"},"View"))),this.state.stop.Location){var p=this.state.stop;o=n.a.createElement(r.b,{to:{pathname:"/anystop/".concat(this.state.agency,"/").concat(this.state.stop.id),state:{stop:p}}},n.a.createElement("div",{className:"map-link"},"View"))}return n.a.createElement("div",{className:"/search"===this.props.location.pathname?"transit-search":"transit-off"},n.a.createElement("div",{className:"agency-upper"},n.a.createElement("div",{className:"radios"},n.a.createElement("div",{className:"short-title"},"Agency ShortList:"),n.a.createElement("div",{className:"radio-one"},n.a.createElement("label",null,n.a.createElement("input",{type:"radio",onChange:this.updateAgency(),checked:"SF"===this.state.agency,value:"SF"}),"SF"),n.a.createElement("label",null,n.a.createElement("input",{type:"radio",onChange:this.updateAgency(),checked:"GG"===this.state.agency,value:"GG"}),"GG"),n.a.createElement("label",null,"\xa0\xa0\xa0",n.a.createElement("input",{type:"radio",onChange:this.updateAgency(),checked:"BA"===this.state.agency,value:"BA"}),"Bart")),n.a.createElement("div",{className:"radio-two"},n.a.createElement("label",null,n.a.createElement("input",{type:"radio",onChange:this.updateAgency(),checked:"AC"===this.state.agency,value:"AC"}),"AC"),n.a.createElement("label",null,n.a.createElement("input",{type:"radio",onChange:this.updateAgency(),checked:"SM"===this.state.agency,value:"SM"}),"Sam"),n.a.createElement("label",null,n.a.createElement("input",{type:"radio",onChange:this.updateAgency(),checked:"MA"===this.state.agency,value:"MA"}),"Marin"))),n.a.createElement("span",{className:"agency-code"},this.state.agency)),n.a.createElement("div",{className:"agencies-string"},"All ",this.state.agencies.length," Transit Agencies:"),n.a.createElement("div",{className:"agency"},n.a.createElement("select",{className:"agency-select",value:this.state.agency,onChange:this.updateAgency(),onMouseDown:this.updateAgency()},t),n.a.createElement("div",{className:"politics"},"(too many? i agree! ",n.a.createElement("a",{href:"https://www.seamlessbayarea.org/",target:"_blank",rel:"noopener noreferrer"},"Seamless Bay Area"),")")),n.a.createElement("hr",null),n.a.createElement("div",{className:"slow"},this.state.loaded?this.state.stops[0]?n.a.createElement("button",{disabled:!0,className:"stop-loads"},"Loaded"):n.a.createElement("button",{disabled:!0,className:"stop-loads"},"Loading"):n.a.createElement("button",{className:"load-stops",onClick:this.loadStops},"Load Stops"),e),n.a.createElement("select",{disabled:!this.state.stopsFiltered[0],className:"stop-select",onChange:this.updateStop()},this.state.stop.id?n.a.createElement("option",{selected:!0,disabled:!0,hidden:!0,value:"0"},this.state.stop.Name," (",this.state.stop.id,")"):"",a),n.a.createElement("br",null),n.a.createElement("input",{type:"text",value:this.state.stopFilter,className:"stop-filter",onChange:this.updateStopFilter(),disabled:!this.state.loaded,placeholder:this.state.loaded?"Type to Search":"Load Stops to Search"}),n.a.createElement("br",null),n.a.createElement("div",{className:"stop-info"},n.a.createElement("div",{className:"stop-title",onClick:this.handleSubmit},this.state.stop.Name?this.state.stop.Name:l,n.a.createElement("div",null,"Tap to ReFresh")),n.a.createElement("div",null,n.a.createElement("input",{type:"BA"===this.state.agency||"AM"===this.state.agency?"text":"number",id:"stop-id",placeholder:"Stop Code",value:this.state.stopCode,onFocus:this.selectID,onChange:this.updateStopCode()}),o)),c)}}]),t}(n.a.Component),C=Object(l.f)(f);var N=Object(l.f)((function(e){var t=e.location.pathname.substring(1);return document.title="transitYourself - ".concat(t),n.a.createElement("div",{className:"transit-header"},n.a.createElement(r.b,{to:"/search"},n.a.createElement("div",{title:"Search",className:"/search"===e.location.pathname?"transit-switch-on":"transit-switch-off"},n.a.createElement("span",{title:"Search",role:"img","aria-label":"magnifying glass emoji"},"\ud83d\udd0d"))),n.a.createElement(r.b,{to:"/saved"},n.a.createElement("div",{title:"My Stops",className:e.location.pathname.includes("/saved")?"transit-switch-on":"transit-switch-off"},n.a.createElement("span",{title:"My Stops",role:"img","aria-label":"map pin emoji"},"\ud83d\udccd"))),n.a.createElement(r.b,{to:"/vehicular"},n.a.createElement("div",{id:"busemoji",className:e.location.pathname.includes("/vehicular")?"transit-switch-on":"transit-switch-off"},n.a.createElement("span",{title:"Vehicular Tracking",role:"img","aria-label":"bus emoji"},"\ud83d\ude8c"))),n.a.createElement(r.b,{to:"/anystop"},n.a.createElement("div",{title:"Stop Departures",className:e.location.pathname.includes("/anystop")?"transit-switch-on":"transit-switch-off"},n.a.createElement("span",{title:"Live Departures",role:"img","aria-label":"bus stop emoji"},"\ud83d\ude8f"))),n.a.createElement(r.b,{to:"/user"},n.a.createElement("div",{title:"User",className:"/user"===e.location.pathname?"transit-switch-on":"transit-switch-off"},n.a.createElement("span",{title:"User Settings",role:"img","aria-label":"user emoji"},"\ud83d\udc64"))))})),S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).selectID=function(e){return e.target.select()},a.state={vehicleNumber:a.props.match.params.vehicleNumber?a.props.match.params.vehicleNumber.toUpperCase():"",agency:a.props.match.params.agency?a.props.match.params.agency.toUpperCase():"SF"},a.loadVehicle=a.loadVehicle.bind(Object(u.a)(a)),a.updateVehicleNumber=a.updateVehicleNumber.bind(Object(u.a)(a)),a.updateAgency=a.updateAgency.bind(Object(u.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(a)),a.selectID=a.selectID.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){document.title="transitYourself - Vehicular Tracking",this.loadVehicle()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.vehicleNumber!==e.match.params.vehicleNumber&&this.loadVehicle()}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.history.push("/vehicular/".concat(this.state.agency,"/").concat(this.state.vehicleNumber)),this.loadVehicle()}},{key:"loadVehicle",value:function(){var e=this,t={VehicleRef:this.props.match.params.vehicleNumber},a=this.state.agency.toUpperCase();g.a.get("https://api.511.org/transit/VehicleMonitoring?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&agency=".concat(a,"&format=json&vehicleID=").concat(t.VehicleRef)).then((function(s){s.data.Siri.ServiceDelivery.VehicleMonitoringDelivery.VehicleActivity&&(t=s.data.Siri.ServiceDelivery.VehicleMonitoringDelivery.VehicleActivity[0].MonitoredVehicleJourney),e.setState({vehicleNumber:t.VehicleRef,vehicle:t,agency:a}),document.title="transitYourself - Vehicular Tracking\n                    ".concat(t.OperatorRef?"- ".concat(t.OperatorRef," #").concat(t.VehicleRef):"")}))}},{key:"updateVehicleNumber",value:function(e){var t=this;return function(e){var a=e.currentTarget.value;t.setState({vehicleNumber:a})}}},{key:"updateAgency",value:function(e){var t=this;return function(e){var a=e.currentTarget.value;a.length<=2&&t.setState({agency:a})}}},{key:"render",value:function(){var e,t,a=this,s=n.a.createElement("div",{className:"vehicle-info"},"No Tracked Vehicle"),i="";(this.state.vehicle&&this.state.vehicle.VehicleLocation&&(e=n.a.createElement("iframe",{title:"gFrame",frameBorder:"1",src:"https://www.google.com/maps/embed/v1/place?zoom=14&q=".concat(this.state.vehicle.VehicleLocation.Latitude,",").concat(this.state.vehicle.VehicleLocation.Longitude,"&key=AIzaSyAIe8CQdaU5qYMgUBimNtNLtz6MKhODsNU")},"Loading Map...")),this.state.vehicle&&this.state.vehicle.MonitoredCall)&&(s=n.a.createElement("div",{className:"vehicle-info"},n.a.createElement("span",null,n.a.createElement("span",{className:"no-gps"},this.state.vehicle.LineRef),n.a.createElement("span",{className:"bold"},"=>")),n.a.createElement("div",null,n.a.createElement("span",{className:"bold"},this.state.vehicle.DestinationName),n.a.createElement("div",null,n.a.createElement(r.b,{to:"/anystop/".concat(this.state.agency,"/").concat(this.state.vehicle.DestinationRef)},n.a.createElement("div",{className:"map-link"},n.a.createElement("span",{title:"bus stop",role:"img","aria-label":"bus stop emoji"},"\ud83d\ude8f"),this.state.vehicle.DestinationRef))))),t="CT"===this.state.agency?this.state.vehicle.MonitoredCall.ExpectedDepartureTime:this.state.vehicle.MonitoredCall.ExpectedArrivalTime,i=n.a.createElement("div",{className:"stop"},n.a.createElement("div",null,n.a.createElement("span",{className:"bold"},this.state.vehicle.MonitoredCall.StopPointName),n.a.createElement(r.b,{to:"/anystop/".concat(this.state.agency,"/").concat(this.state.vehicle.MonitoredCall.StopPointRef)},n.a.createElement("div",{className:"map-link"},n.a.createElement("span",{title:"bus stop",role:"img","aria-label":"bus stop emoji"},"\ud83d\ude8f"),this.state.vehicle.MonitoredCall.StopPointRef))),n.a.createElement("hr",null),n.a.createElement("div",null,t&&t!==this.state.vehicle.MonitoredCall.AimedDepartureTime?n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"gray"},E(this.state.vehicle.MonitoredCall.AimedArrivalTime)),n.a.createElement("span",{className:"bold"},E(t))):n.a.createElement("span",{className:"bold"},"Scheduled ",E(this.state.vehicle.MonitoredCall.AimedArrivalTime)),n.a.createElement("div",{className:"countdown"},t&&t!==this.state.vehicle.MonitoredCall.AimedDepartureTime?n.a.createElement("div",{className:"min-math"},b(t)):n.a.createElement("div",{className:"min-math"},b(this.state.vehicle.MonitoredCall.AimedArrivalTime)),n.a.createElement("div",{className:"min"},"min")))));var o=n.a.createElement("div",{className:"future-stops"},n.a.createElement("div",{className:"stop"},"No Future Stops")),l=0;return this.state.vehicle&&this.state.vehicle.OnwardCalls&&this.state.vehicle.OnwardCalls.OnwardCall[0]&&(o=n.a.createElement("div",{className:"future-stops"},i,this.state.vehicle.OnwardCalls.OnwardCall.map((function(e){var t;return t="CT"===a.state.agency.toUpperCase()?e.ExpectedDepartureTime:e.ExpectedArrivalTime,n.a.createElement("div",{className:"stop",key:l++},n.a.createElement("div",null,n.a.createElement("span",{className:"bold"},e.StopPointName),n.a.createElement(r.b,{to:"/anystop/".concat(a.state.agency,"/").concat(e.StopPointRef)},n.a.createElement("div",{className:"map-link"},n.a.createElement("span",{title:"bus stop",role:"img","aria-label":"bus stop emoji"},"\ud83d\ude8f"),e.StopPointRef))),n.a.createElement("hr",null),n.a.createElement("div",null,t&&t!==e.AimedDepartureTime?n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{className:"gray"},E(e.AimedArrivalTime)),n.a.createElement("span",{className:"bold"},E(t))):n.a.createElement("span",{className:"bold"},"Scheduled ",E(e.AimedArrivalTime)),n.a.createElement("div",{className:"countdown"},t?n.a.createElement("div",{className:"min-math"},b(t)):n.a.createElement("div",{className:"min-math"},b(e.AimedArrivalTime)),n.a.createElement("div",{className:"min"},"min"))))})))),n.a.createElement("div",{className:"vehicular"},n.a.createElement("div",{className:"short-title"},"Vehicular Tracking",this.state.vehicle&&this.state.vehicle.VehicleRef&&this.state.vehicle.OperatorRef?" - ".concat(this.state.vehicle.OperatorRef," #").concat(this.state.vehicle.VehicleRef):""),n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("input",{type:"text",id:"vehicle-agency",placeholder:"Agency",value:this.state.agency,onFocus:this.selectID,onChange:this.updateAgency()}),n.a.createElement("input",{type:"number",id:"vehicle-number",placeholder:"Vehicle",value:this.state.vehicleNumber,onFocus:this.selectID,onChange:this.updateVehicleNumber()}),this.state.vehicle&&this.state.vehicle.Monitored?n.a.createElement("input",{type:"submit",value:"ReLoad"}):n.a.createElement("input",{type:"submit",value:"Load"}),n.a.createElement("br",null),n.a.createElement("a",{className:"vehicular-feedback",href:"https://www.sfmta.com/getting-around/muni/muni-feedback",target:"_blank",rel:"noopener noreferrer"},"SFMUNI Vehicle Numbers")),s,n.a.createElement("div",{className:"g-frame"},e),o)}}]),t}(n.a.Component),M=Object(l.f)(S),A=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={buss:[]},a.loadBusss=a.loadBusss.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadBusss()}},{key:"loadBusss",value:function(){var e=this;g.a.get("https://api.511.org/transit/StopMonitoring?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON&agency=".concat(this.props.agency,"&stopCode=").concat(this.props.stopCode)).then((function(t){var a=t.data.ServiceDelivery.StopMonitoringDelivery.MonitoredStopVisit;e.props.filterIN&&(a=a.filter((function(t){return e.props.filterIN.includes(t.MonitoredVehicleJourney.LineRef)}))),e.props.filterOUT&&(a=a.filter((function(t){return!e.props.filterOUT.includes(t.MonitoredVehicleJourney.LineRef)}))),e.props.limit&&(a=a.slice(0,e.props.limit)),e.setState({buss:a})}))}},{key:"render",value:function(){var e,t=n.a.createElement("div",{className:"bust"},"No Tracked Vehicles to show.",n.a.createElement("br",null),n.a.createElement("span",{className:"update",onClick:this.loadBusss},"Check again"),", check your inputs, or check the schedule.");if(this.state.buss[0]){e=this.state.buss[0].MonitoredVehicleJourney.MonitoredCall.StopPointName;var a=0;t=this.state.buss.map((function(e){return n.a.createElement(y,{bus:e,key:a++})}))}return n.a.createElement("div",{className:"any-stop"},n.a.createElement("div",{className:"header"},n.a.createElement(r.b,{to:"/anystop/".concat(this.props.agency,"/").concat(this.props.stopCode)},n.a.createElement("div",{className:"map-link"},n.a.createElement("span",{title:"bus stop",role:"img","aria-label":"bus stop emoji"},"\ud83d\ude8f"),this.props.title?this.props.title:e||"".concat(this.props.agency,"#").concat(this.props.stopCode)))),t)}}]),t}(n.a.Component),V=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).selectID=function(e){return e.target.select()},a.state={stopCode:a.props.match.params.stopCode?a.props.match.params.stopCode.toUpperCase():"",agency:a.props.match.params.agency?a.props.match.params.agency.toUpperCase():"SF",stop:a.props.location.state?a.props.location.state.stop:{},buss:[]},a.loadBusss=a.loadBusss.bind(Object(u.a)(a)),a.loadStopList=a.loadStopList.bind(Object(u.a)(a)),a.stopListIntegrator=a.stopListIntegrator.bind(Object(u.a)(a)),a.updateStopCode=a.updateStopCode.bind(Object(u.a)(a)),a.selectID=a.selectID.bind(Object(u.a)(a)),a.agencyCodeLengthMap={AM:3,PE:3,VC:3,BA:4,EM:4,SA:4,AC:5,CT:5,CC:5,DE:5,FS:5,GF:5,GG:5,MA:5,RV:5,SC:5,SF:5,SR:5,UC:5,VN:5,WC:5,SS:6,WH:6,SM:6,ST:6,TD:6,"3D":6,CE:7,CM:7,SO:7},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){document.title="transitYourself - Live Departures - ".concat(this.state.agency," ").concat(this.state.stopCode?"#".concat(this.state.stopCode):""),this.loadBusss()}},{key:"loadBusss",value:function(){var e=this;this.state.stopCode.length===this.agencyCodeLengthMap[this.state.agency]&&g.a.get("https://api.511.org/transit/StopMonitoring?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON&agency=".concat(this.state.agency,"&stopCode=").concat(this.state.stopCode)).then((function(t){var a=t.data.ServiceDelivery.StopMonitoringDelivery.MonitoredStopVisit;e.setState({buss:a})})).catch(this.setState({buss:[]}))}},{key:"loadStopList",value:function(){var e=this;g.a.get("".concat("/transitYourself","/stopLists/stopList").concat(this.state.agency,".json")).then((function(t){e.stopListIntegrator(t)})).catch((function(t){g.a.get("https://api.511.org/transit/stops?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON&operator_id=".concat(e.state.agency)).then((function(t){e.stopListIntegrator(t)}))}))}},{key:"stopListIntegrator",value:function(e){var t=this,a=e.data.Contents.dataObjects.ScheduledStopPoint.filter((function(e){return e.id===t.state.stopCode.toUpperCase()}))[0]||{};this.setState({stop:a})}},{key:"updateStopCode",value:function(e){var t=this;return function(e){var a=e.currentTarget.value;if(a.length<=t.agencyCodeLengthMap[t.state.agency]&&t.setState({stopCode:a}),a.length===t.agencyCodeLengthMap[t.state.agency]){var s=a.toUpperCase();t.props.history.push("/anystop/".concat(t.state.agency,"/").concat(s)),g.a.get("https://api.511.org/transit/StopMonitoring?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON&agency=".concat(t.state.agency,"&stopCode=").concat(s)).then((function(e){var a=e.data.ServiceDelivery.StopMonitoringDelivery.MonitoredStopVisit;t.setState({buss:a,stopCode:s}),document.title="transitYourself - Live Departures - ".concat(t.state.agency," #").concat(s)})).catch(t.setState({buss:[]}))}}}},{key:"render",value:function(){var e,t=n.a.createElement("div",{className:"bust"},"No Tracked Vehicles to show.",n.a.createElement("br",null),n.a.createElement("span",{className:"update",onClick:this.loadBusss},"Check again"),", check your inputs, or check the schedule.");if(this.state.buss[0]){e=this.state.buss[0].MonitoredVehicleJourney.MonitoredCall.StopPointName;var a=0;t=this.state.buss.map((function(e){return n.a.createElement(y,{bus:e,key:a++})}))}var s=n.a.createElement("button",{disabled:!0,className:"stop-loads"},"Show Map");return this.state.stopCode.length===this.agencyCodeLengthMap[this.state.agency]&&(s=n.a.createElement("button",{className:"load-stops",onClick:this.loadStopList},"Show Map")),this.state.stop.Location&&this.state.stopCode.toUpperCase()===this.state.stop.id&&(s=n.a.createElement("iframe",{title:"gFrame",frameBorder:"1",src:"https://www.google.com/maps/embed/v1/place?zoom=16&q=".concat(this.state.stop.Location.Latitude,",").concat(this.state.stop.Location.Longitude,"&key=AIzaSyAIe8CQdaU5qYMgUBimNtNLtz6MKhODsNU")},"Loading Map...")),n.a.createElement("div",{className:"any-stop-wild-card"},n.a.createElement("div",{className:"short-title"},this.state.agency," ",this.props.match.params.stopCode?"#"+this.props.match.params.stopCode.toUpperCase():""),n.a.createElement("input",{type:"BA"===this.state.agency||"AM"===this.state.agency?"text":"number",id:"stop-id",placeholder:"Stop Code",value:this.state.stopCode,onFocus:this.selectID,onChange:this.updateStopCode()}),n.a.createElement("div",{className:"g-frame"},s),n.a.createElement("div",{className:"stop-title",onClick:this.loadBusss},this.state.stop.Name&&this.state.stopCode.toUpperCase()===this.state.stop.id?this.state.stop.Name:e,n.a.createElement("div",null,"Tap to ReFresh")),n.a.createElement("div",{className:"buss"},t))}}]),t}(n.a.Component),k=Object(l.f)(V);var T=function(){return n.a.createElement("div",{className:"transit-on"},n.a.createElement(A,{title:"Twenty Fourth Street BART",agency:"BA",stopCode:"24TH",filterIN:["YL-S","RD-S"]}),n.a.createElement(A,{title:"Millbrae BART",agency:"BA",stopCode:"MLBR"}),n.a.createElement(A,{title:"CalTrain MillBrae",agency:"CT",stopCode:"70062"}),n.a.createElement(A,{title:"CalTrain San Mateo",agency:"CT",stopCode:"70091"}))};var L=function(){return n.a.createElement("div",{className:"transit-on"},n.a.createElement(A,{agency:"BA",stopCode:"NBRK"}),n.a.createElement(A,{agency:"AC",stopCode:"56144"}),n.a.createElement(A,{agency:"AC",stopCode:"55327"}),n.a.createElement(A,{agency:"AC",stopCode:"59600"}),n.a.createElement(A,{agency:"AC",stopCode:"55165"}))};var O=function(e){return n.a.createElement(r.a,{basename:"/transitYourself"},n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"transit-master"},n.a.createElement(N,null),n.a.createElement("div",{className:"transit-switcher"},n.a.createElement("div",{className:"transit"},n.a.createElement(l.b,{exact:!0,path:"/"},n.a.createElement(l.a,{to:"/saved"})),n.a.createElement(l.b,{exact:!0,path:"/saved"},n.a.createElement("div",null,n.a.createElement(A,{agency:"SF",stopCode:"16513",limit:"2"}),n.a.createElement(A,{agency:"SF",stopCode:"13082",limit:"4"})),n.a.createElement(A,{agency:"BA",stopCode:"EMBR",limit:"9"}),n.a.createElement("div",null,n.a.createElement(A,{title:"frisco train",agency:"CT",stopCode:"70012"}),n.a.createElement(A,{title:"CalTrain MillBrae",agency:"CT",stopCode:"70062"})),n.a.createElement("div",null,n.a.createElement(A,{agency:"GG",stopCode:"42006",filterIN:["4"]}),n.a.createElement(A,{agency:"SF",stopCode:"16750",limit:"2",filterIN:["45"],title:"Across from Mario's"}))),n.a.createElement(l.b,{path:"/vehicular/:agency?/:vehicleNumber?",render:function(e){return n.a.createElement(M,e)}}),n.a.createElement(l.b,{path:"/anystop/:agency?/:stopCode?",render:function(e){return n.a.createElement(k,e)}}),n.a.createElement(l.b,{exact:!0,path:"/user"},n.a.createElement("div",{className:"bus"},"COMING SOON")),n.a.createElement(C,null),n.a.createElement(l.b,{exact:!0,path:"/aa",component:T}),n.a.createElement(l.b,{exact:!0,path:"/da",component:L}),n.a.createElement(l.b,{exact:!0,path:"/weekender"},n.a.createElement(A,{agency:"GG",stopCode:"42006",filterIN:["4"]}),n.a.createElement(A,{agency:"GG",stopCode:"40032"})),n.a.createElement(l.b,{exact:!0,path:"/commuter"},n.a.createElement(A,{agency:"SF",stopCode:"16513",filterOUT:["8","8BX"]}),n.a.createElement(A,{agency:"SF",stopCode:"16750",filterIN:["45"],title:"Across from Mario's"}),n.a.createElement(A,{agency:"SF",stopCode:"13082"})))),n.a.createElement("div",{className:"footer"},n.a.createElement("div",null,n.a.createElement("a",{href:"https://511.org/open-data/transit",title:"Powered by 511 Open Data",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("div",{className:"five-eleven"},n.a.createElement("img",{src:"./511_original_web.png",alt:"511 logo"}))),n.a.createElement("div",{className:"disclaimer"},n.a.createElement("span",null,"Powered by 511 Open Data"),n.a.createElement("br",null),n.a.createElement("span",null,"transitYourself makes no claim as to the veracity or timeliness"))),n.a.createElement("a",{href:"https://github.com/hechtoid/transitYourself",title:"View Source on GitHub",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("div",{className:"GitHub"},n.a.createElement("img",{src:"./GitHub-Mark-120px-plus.png",alt:"GitHub Logo"})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.bd5468d6.chunk.js.map