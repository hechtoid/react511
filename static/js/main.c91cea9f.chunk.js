(this.webpackJsonptransitYourself=this.webpackJsonptransitYourself||[]).push([[0],{33:function(e,t,a){e.exports=a(62)},38:function(e,t,a){},39:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(30),r=a.n(i),o=(a(38),a(39),a(4)),l=a(14),c=a(9),m=a(10),d=a(12),u=a(11),p=a(2),h=a(13),v=a(5),E=a.n(v);var b=function(e){if("BA"===e.bus.MonitoredVehicleJourney.OperatorRef)return s.a.createElement("div",{className:"bus",id:e.bus.MonitoredVehicleJourney.LineRef},s.a.createElement("div",{className:"bus-left"},s.a.createElement("div",null,s.a.createElement("span",null,e.bus.MonitoredVehicleJourney.OriginName),s.a.createElement("span",{className:"bold"}," => ",e.bus.MonitoredVehicleJourney.DestinationName)),e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime?s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{className:"gray"},new Date(Date.parse(e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)).toLocaleTimeString()),s.a.createElement("span",{className:"bold"}," => ",new Date(Date.parse(e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime)).toLocaleTimeString())):s.a.createElement("span",{className:"bold"},new Date(Date.parse(e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)).toLocaleTimeString())),s.a.createElement("div",{className:"countdown"},s.a.createElement("div",{className:"min"},"in"),e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime?s.a.createElement("div",{className:"min-math"},Math.floor((new Date(Date.parse(e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime))-new Date)/6e4)):s.a.createElement("div",{className:"min-math"},Math.floor((new Date(Date.parse(e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime))-new Date)/6e4)),s.a.createElement("div",{className:"min"},"min")));if("CT"===e.bus.MonitoredVehicleJourney.OperatorRef){var t="GY-N";return"Limited"===e.bus.MonitoredVehicleJourney.LineRef&&(t="YL-N"),"Bullet"===e.bus.MonitoredVehicleJourney.LineRef&&(t="RD-N"),s.a.createElement("div",{className:"bus",id:t},s.a.createElement("div",{className:"bus-left"},s.a.createElement("div",null,s.a.createElement("span",{className:"bold"},e.bus.MonitoredVehicleJourney.LineRef," => "),e.bus.MonitoredVehicleJourney.DestinationName),e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime&&e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime!==e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime?s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{className:"gray"},new Date(Date.parse(e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)).toLocaleTimeString()),s.a.createElement("span",{className:"bold"}," => ",new Date(Date.parse(e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime)).toLocaleTimeString())):s.a.createElement("span",{className:"bold"},new Date(Date.parse(e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)).toLocaleTimeString())),s.a.createElement("div",{className:"countdown"},s.a.createElement("div",{className:"min"},"in"),e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime?s.a.createElement("div",{className:"min-math"},Math.floor((new Date(Date.parse(e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedDepartureTime))-new Date)/6e4)):s.a.createElement("div",{className:"min-math"},Math.floor((new Date(Date.parse(e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime))-new Date)/6e4)),s.a.createElement("div",{className:"min"},"min")))}return["SF","AC","GG","SM","MA","SC"].includes(e.bus.MonitoredVehicleJourney.OperatorRef)?s.a.createElement("div",{className:"bus"},s.a.createElement("div",{className:"bus-left"},s.a.createElement("div",null,s.a.createElement("span",{title:"Track Vehicle",className:"bold"},e.bus.MonitoredVehicleJourney.VehicleRef?s.a.createElement(o.b,{className:"gps",to:{pathname:"/vehicular",state:{vehicleNumber:e.bus.MonitoredVehicleJourney.VehicleRef,agency:e.bus.MonitoredVehicleJourney.OperatorRef}}},e.bus.MonitoredVehicleJourney.LineRef,s.a.createElement("sup",null,"GPS")):s.a.createElement(s.a.Fragment,null,e.bus.MonitoredVehicleJourney.LineRef)," => "),e.bus.MonitoredVehicleJourney.DestinationName),e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime?s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{className:"gray"},new Date(Date.parse(e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)).toLocaleTimeString()),s.a.createElement("span",{className:"bold"}," => ",new Date(Date.parse(e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime)).toLocaleTimeString())):s.a.createElement("span",{className:"bold"},new Date(Date.parse(e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)).toLocaleTimeString())),s.a.createElement("div",{className:"countdown"},s.a.createElement("div",{className:"min"},"in"),e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime?s.a.createElement("div",{className:"min-math"},Math.floor((new Date(Date.parse(e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime))-new Date)/6e4)):s.a.createElement("div",{className:"min-math"},Math.floor((new Date(Date.parse(e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime))-new Date)/6e4)),s.a.createElement("div",{className:"min"},"min"))):s.a.createElement("div",{className:"bus"},s.a.createElement("div",{className:"bus-left"},s.a.createElement("div",null,s.a.createElement("span",{className:"bold"},e.bus.MonitoredVehicleJourney.LineRef," => "),e.bus.MonitoredVehicleJourney.DestinationName),e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime?s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{className:"gray"},new Date(Date.parse(e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)).toLocaleTimeString()),s.a.createElement("span",{className:"bold"}," => ",new Date(Date.parse(e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime)).toLocaleTimeString())):s.a.createElement("span",{className:"bold"},new Date(Date.parse(e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime)).toLocaleTimeString())),s.a.createElement("div",{className:"countdown"},s.a.createElement("div",{className:"min"},"in"),e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime?s.a.createElement("div",{className:"min-math"},Math.floor((new Date(Date.parse(e.bus.MonitoredVehicleJourney.MonitoredCall.ExpectedArrivalTime))-new Date)/6e4)):s.a.createElement("div",{className:"min-math"},Math.floor((new Date(Date.parse(e.bus.MonitoredVehicleJourney.MonitoredCall.AimedArrivalTime))-new Date)/6e4)),s.a.createElement("div",{className:"min"},"min")))},y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).selectID=function(e){return e.target.select()},a.state={loaded:!1,stopCode:"EMBR",agency:"BA",agencies:[],stopLists:{},stops:[],stopFilter:"",stopsFiltered:[],stop:{Name:"Embarcadero"},buss:[]},a.loadBusss=a.loadBusss.bind(Object(p.a)(a)),a.loadStops=a.loadStops.bind(Object(p.a)(a)),a.updateStopFilter=a.updateStopFilter.bind(Object(p.a)(a)),a.selectID=a.selectID.bind(Object(p.a)(a)),a.agencyCodeLengthMap={AM:3,PE:3,VC:3,BA:4,EM:4,SA:4,AC:5,CT:5,CC:5,DE:5,FS:5,GF:5,GG:5,MA:5,RV:5,SC:5,SF:5,SR:5,UC:5,VN:5,WC:5,SS:6,WH:6,SM:6,ST:6,TD:6,"3D":6,CE:7,CM:7,SO:7},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://api.511.org/transit/operators?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON").then((function(t){var a=t.data.filter((function(e){return!!e.WebSite}));e.setState({agencies:a})})),this.loadBusss()}},{key:"loadBusss",value:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.state.agency,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.state.stopCode;E.a.get("https://api.511.org/transit/StopMonitoring?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON&agency=".concat(a,"&stopCode=").concat(n)).then((function(e){var a=e.data.ServiceDelivery.StopMonitoringDelivery.MonitoredStopVisit;t.setState({buss:a})}))}},{key:"updateAgency",value:function(){var e=this;return function(t){var a,n=t.currentTarget.value,s=[];e.state.stopLists[n]?(a=(s=e.state.stopLists[n])[0],e.setState({stopFilter:"",stopsFiltered:s,stopCode:a.id,buss:[],loaded:!0,stop:a,stops:s,agency:n}),e.loadBusss(t,n,a.id)):e.setState({agency:t.currentTarget.value,stop:{},stops:[],stopFilter:"",stopsFiltered:[],stopCode:"",buss:[],loaded:!1})}}},{key:"loadStops",value:function(e){var t=this;this.setState({loaded:!0}),E.a.get("https://api.511.org/transit/stops?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON&operator_id=".concat(this.state.agency)).then((function(a){if("BA"===t.state.agency){var n=a.data.Contents.dataObjects.ScheduledStopPoint.filter((function(e){return!e.id.includes("place")&&!e.Name.includes("Enter/Exit :")})),s=t.state.stopCode||"EMBR",i=n.filter((function(e){return e.id===s.toUpperCase()}))[0]||n.filter((function(e){return"EMBR"===e.id}))[0];t.setState({stopFilter:"",stopsFiltered:n,stopLists:{BA:n},stopCode:i.id,stops:n,stop:i}),t.loadBusss(e,t.state.agency,i.id)}else{var r=a.data.Contents.dataObjects.ScheduledStopPoint,o=r.filter((function(e){return e.id===t.state.stopCode.toUpperCase()}))[0]||r[0],l=t.state.stopLists;l[t.state.agency]=r,t.setState({stopCode:o.id,stopFilter:"",stopsFiltered:r,stopLists:l,stops:r,stop:o}),t.loadBusss(e,t.state.agency,o.id)}}))}},{key:"updateStop",value:function(){var e=this;return function(t){var a=e.state.stopsFiltered[t.currentTarget.value];e.setState({stopCode:a.id,stop:a}),e.loadBusss(t,e.state.agency,a.id)}}},{key:"updateStopFilter",value:function(){var e=this;return function(t){var a=t.currentTarget.value;if(1===a.length&&e.setState({stopsFiltered:e.state.stops}),a.length<3)e.setState({stopFilter:a});else if(a.length<=e.state.stopFilter.length){var n=e.state.stops;e.setState({stopFilter:a,stopsFiltered:n})}else if(a.length>=3){e.setState({stopFilter:a});var s=a.toLowerCase().split(" ");s.push(""),s.push(""),s.push("");var i=e.state.stopsFiltered.filter((function(e){var t=e.Name.toLowerCase();return!!(t.includes(s[0])&&t.includes(s[1])&&t.includes(s[2])&&t.includes(s[3]))}));if(e.setState({stopsFiltered:i}),i[0]){var r=i[0];e.state.stopCode!==r.id&&(e.setState({stopCode:r.id,stop:r}),e.loadBusss(t,e.state.agency,r.id))}}}}},{key:"updateStopCode",value:function(){var e=this;return function(t){var a=t.currentTarget.value,n=a.toUpperCase();if(a.length<=e.agencyCodeLengthMap[e.state.agency]&&e.setState({stopCode:a}),a.length===e.agencyCodeLengthMap[e.state.agency]){var s=e.state.stops.filter((function(e){return e.id.toUpperCase()===n}))[0];s?e.setState({stopsFiltered:e.state.stops,stopFilter:"",stopCode:n,stop:s}):e.setState({stop:{}}),E.a.get("https://api.511.org/transit/StopMonitoring?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON&agency=".concat(e.state.agency,"&stopCode=").concat(n)).then((function(t){var a=t.data.ServiceDelivery.StopMonitoringDelivery.MonitoredStopVisit;e.setState({buss:a}),a[0]&&e.setState({stopCode:n})}))}}}},{key:"render",value:function(){var e,t,a;if(this.state.loaded&&!this.state.stops[0]?e=s.a.createElement("div",null,s.a.createElement("span",null,"Muni and the VTA have ",s.a.createElement("span",{className:"stops-number"},"~3500")," stops,"),s.a.createElement("br",null),s.a.createElement("span",null,"ACTransit more than ",s.a.createElement("span",{className:"stops-number"},"5000"),".")):this.state.loaded&&this.state.stops[0]&&this.state.stopFilter?e=s.a.createElement("div",null,"Loaded ",s.a.createElement("span",{className:"stops-number"},this.state.stops.length)," stops.",s.a.createElement("br",null),this.state.stopsFiltered.length===this.state.stops.length?"":s.a.createElement(s.a.Fragment,null,s.a.createElement("span",{className:"stops-number"},this.state.stopsFiltered.length)," in Filter.")):this.state.loaded&&this.state.stops[0]&&(e=s.a.createElement("div",null,"Loaded ",s.a.createElement("span",{className:"stops-number"},this.state.stops.length)," stops.",s.a.createElement("br",null))),this.state.agencies){var n=0;t=this.state.agencies.map((function(e){return s.a.createElement("option",{value:e.Id,key:n++},e.ShortName?e.ShortName:e.Name," ",e.ShortName&&e.ShortName!==e.Name?"(".concat(e.Name,")"):"")}))}if(this.state.stopsFiltered){var i=0;a=this.state.stopsFiltered.map((function(e){return s.a.createElement("option",{key:i,value:i++},e.Name," (",e.id,")")}))}var r="",o=s.a.createElement("div",{className:"bust"},"No Tracked Vehicles.",s.a.createElement("br",null),s.a.createElement("span",{className:"update",onClick:this.loadBusss},"Check again"),", check your inputs, or check the schedule.");if(this.state.buss[0]){r=this.state.buss[0].MonitoredVehicleJourney.MonitoredCall.StopPointName;var l=0;o=this.state.buss.map((function(e){return s.a.createElement(b,{bus:e,key:l++})}))}var c="",m="";return this.state.stop.Location&&(c="https://www.google.com/maps/search/?api=1&query=".concat(this.state.stop.Location.Latitude,",").concat(this.state.stop.Location.Longitude),m=s.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},"View in Maps")),s.a.createElement("div",{className:"stop"},s.a.createElement("div",{className:"agency-upper"},s.a.createElement("div",{className:"radios"},s.a.createElement("div",{className:"short-title"},"Agency ShortList:"),s.a.createElement("div",{className:"radio-one"},s.a.createElement("label",null,s.a.createElement("input",{type:"radio",onChange:this.updateAgency(),checked:"SF"===this.state.agency,value:"SF"}),"SF"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",onChange:this.updateAgency(),checked:"GG"===this.state.agency,value:"GG"}),"GG"),s.a.createElement("label",null,"\xa0\xa0\xa0",s.a.createElement("input",{type:"radio",onChange:this.updateAgency(),checked:"BA"===this.state.agency,value:"BA"}),"Bart")),s.a.createElement("div",{className:"radio-two"},s.a.createElement("label",null,s.a.createElement("input",{type:"radio",onChange:this.updateAgency(),checked:"AC"===this.state.agency,value:"AC"}),"AC"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",onChange:this.updateAgency(),checked:"SM"===this.state.agency,value:"SM"}),"Sam"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",onChange:this.updateAgency(),checked:"MA"===this.state.agency,value:"MA"}),"Marin"))),s.a.createElement("span",{className:"agency-code"},this.state.agency)),s.a.createElement("div",{className:"agencies-string"},"All ",this.state.agencies.length," Transit Agencies:"),s.a.createElement("div",{className:"agency"},s.a.createElement("select",{className:"agency-select",value:this.state.agency,onChange:this.updateAgency(),onMouseDown:this.updateAgency()},t),s.a.createElement("div",{className:"politics"},"(too many? i agree! ",s.a.createElement("a",{href:"https://www.seamlessbayarea.org/",target:"_blank",rel:"noopener noreferrer"},"Seamless Bay Area"),")")),s.a.createElement("hr",null),s.a.createElement("div",{className:"slow"},this.state.loaded?this.state.stops[0]?s.a.createElement("button",{disabled:!0,className:"stop-loads"},"Loaded"):s.a.createElement("button",{disabled:!0,className:"stop-loading"},"Loading"):s.a.createElement("button",{className:"load-stops",onClick:this.loadStops},"Load Stops"),e),s.a.createElement("select",{disabled:!this.state.stopsFiltered[0],className:"stop-select",onChange:this.updateStop()},this.state.stop.id?s.a.createElement("option",{selected:!0,disabled:!0,hidden:!0,value:"0"},this.state.stop.Name," (",this.state.stop.id,")"):"",this.state.stop.id,a),s.a.createElement("br",null),s.a.createElement("input",{type:"text",value:this.state.stopFilter,className:"stop-filter",onChange:this.updateStopFilter(),disabled:!this.state.loaded,placeholder:this.state.loaded?"Type to Search":"Load Stops to enable Search"}),s.a.createElement("br",null),s.a.createElement("div",{className:"stop-info"},s.a.createElement("div",{className:"stop-title",onClick:this.loadBusss},this.state.stop.Name?this.state.stop.Name:r,s.a.createElement("div",null,"Tap to ReFresh")),s.a.createElement("div",null,s.a.createElement("input",{type:"text",id:"stop-id",placeholder:"Stop Code",value:this.state.stopCode,onFocus:this.selectID,onChange:this.updateStopCode()}),s.a.createElement("br",null),s.a.createElement("div",{className:"map-link"},m))),o)}}]),t}(s.a.Component);var g=Object(l.f)((function(e){return document.title="transitYourself//".concat(e.location.pathname),s.a.createElement("div",{className:"transit-header"},s.a.createElement(o.b,{to:"/vehicular"},s.a.createElement("div",{id:"busemoji",className:"/vehicular"===e.location.pathname?"transit-switch-on":"transit-switch-off"},s.a.createElement("span",{title:"Vehicular",role:"img","aria-label":"bus emoji"},"\ud83d\ude8c"))),s.a.createElement(o.b,{to:"/weekender"},s.a.createElement("div",{id:"marin",title:"Weekender",className:"/weekender"===e.location.pathname?"transit-switch-on":"transit-switch-off"},"Weekender")),s.a.createElement(o.b,{to:"/commuter"},s.a.createElement("div",{title:"Commuter",className:"/commuter"===e.location.pathname?"transit-switch-on":"transit-switch-off"},"Commuter")),s.a.createElement(o.b,{to:"/anywherer"},s.a.createElement("div",{title:"Anywherer",className:"/anywherer"===e.location.pathname?"transit-switch-on":"transit-switch-off"},"Anywherer")),s.a.createElement("div",{className:"five-eleven"},s.a.createElement("a",{href:"https://511.org/open-data/transit",title:"Powered by 511 Open Data",target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{className:"five-eleven",src:"https://proxy-prod.511.org/assets/img/branding/511_original_web.png",alt:"511 logo"}))))})),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state=a.props.location.state||{vehicleNumber:"",agency:""},a.loadVehicle=a.loadVehicle.bind(Object(p.a)(a)),a.updateVehicleNumber=a.updateVehicleNumber.bind(Object(p.a)(a)),a.updateAgency=a.updateAgency.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadVehicle()}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.loadVehicle()}},{key:"loadVehicle",value:function(){var e=this,t={},a=this.state.agency.toUpperCase()||"SF";E.a.get("https://api.511.org/transit/VehicleMonitoring?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&agency=".concat(a,"&format=json&vehicleID=").concat(this.state.vehicleNumber)).then((function(a){t=a.data.Siri.ServiceDelivery.VehicleMonitoringDelivery.VehicleActivity?a.data.Siri.ServiceDelivery.VehicleMonitoringDelivery.VehicleActivity[0].MonitoredVehicleJourney:{},e.setState({vehicle:t})}))}},{key:"updateVehicleNumber",value:function(e){var t=this;return function(e){var a=e.currentTarget.value;t.setState({vehicleNumber:a})}}},{key:"updateAgency",value:function(e){var t=this;return function(e){var a=e.currentTarget.value;a.length<=2&&t.setState({agency:a})}}},{key:"render",value:function(){var e,t=this,a=s.a.createElement("div",{className:"vehicle-info"},"No Tracked Vehicle"),n=s.a.createElement("div",{className:"future-stops"},"No Future Stops"),i=0;return this.state.vehicle&&this.state.vehicle.VehicleLocation&&(e=s.a.createElement("iframe",{title:"gFrame",frameBorder:"1",src:"https://www.google.com/maps/embed/v1/place?zoom=14&q=".concat(this.state.vehicle.VehicleLocation.Latitude,",").concat(this.state.vehicle.VehicleLocation.Longitude,"&key=AIzaSyAIe8CQdaU5qYMgUBimNtNLtz6MKhODsNU")},"Loading Map...")),this.state.vehicle&&this.state.vehicle.MonitoredCall&&(a=s.a.createElement("div",{className:"vehicle-info"},"Route ",s.a.createElement("span",{className:"bold"},this.state.vehicle.LineRef)," to ",s.a.createElement("span",{className:"bold"},this.state.vehicle.DestinationName),s.a.createElement("br",null),s.a.createElement(o.b,{to:"/anystop/".concat(this.state.agency||"SF","/").concat(this.state.vehicle.MonitoredCall.StopPointRef)},"NextStop"),": ",s.a.createElement("span",{className:"bold"},this.state.vehicle.MonitoredCall.StopPointName),s.a.createElement("br",null),s.a.createElement("span",{className:"gray"},new Date(Date.parse(this.state.vehicle.MonitoredCall.AimedArrivalTime)).toLocaleTimeString()," "),s.a.createElement("span",{className:"bold"},"=> ",new Date(Date.parse(this.state.vehicle.MonitoredCall.ExpectedArrivalTime)).toLocaleTimeString()))),this.state.vehicle&&this.state.vehicle.OnwardCalls&&this.state.vehicle.OnwardCalls.OnwardCall[0]&&(n=s.a.createElement("div",{className:"future-stops"},"Future Stops:",s.a.createElement("br",null),this.state.vehicle.OnwardCalls.OnwardCall.map((function(e){return s.a.createElement("div",{className:"bust",key:i++},"|  Stop ",s.a.createElement(o.b,{to:"/anystop/".concat(t.state.agency||"SF","/").concat(e.StopPointRef)},"#",e.StopPointRef),"  |    \xa0\xa0\xa0  ",e.StopPointName,s.a.createElement("br",null),s.a.createElement("span",{className:"gray"},new Date(Date.parse(e.AimedArrivalTime)).toLocaleTimeString()),s.a.createElement("span",{className:"bold"}," => ",new Date(Date.parse(e.ExpectedArrivalTime)).toLocaleTimeString()))})))),s.a.createElement("div",{className:"vehicular"},s.a.createElement("div",{className:"short-title"},"Live Tracking - Vehicle ",this.state.vehicle?this.state.vehicle.VehicleRef:this.state.vehicleNumber),e,s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("input",{type:"text",id:"vehicle-number",placeholder:"Vehicle Number",value:this.state.vehicleNumber,onChange:this.updateVehicleNumber()}),s.a.createElement("input",{type:"text",id:"vehicle-agency",placeholder:"Agency Code",value:this.state.agency,onChange:this.updateAgency()}),this.state.vehicle&&this.state.vehicle.Monitored?s.a.createElement("input",{type:"submit",value:"ReLoad"}):s.a.createElement("input",{type:"submit",value:"Load"})),s.a.createElement("a",{href:"https://www.sfmta.com/getting-around/muni/muni-feedback",className:"vehicular-feedback",target:"_blank",rel:"noopener noreferrer"},"Vehicle Number Locations (SFMUNI)"),a,n)}}]),t}(s.a.Component),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={buss:[]},a.loadBusss=a.loadBusss.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.loadBusss()}},{key:"loadBusss",value:function(){var e=this;"SB"===this.props.agency||"GF"===this.props.agency?E.a.get("https://api.511.org/transit/stoptimetable?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON&OperatorRef=".concat(this.props.agency,"&MonitoringRef=").concat(this.props.stop)).then((function(t){var a=t.data.ServiceDelivery.StopMonitoringDelivery.MonitoredStopVisit;e.setState({buss:a})})):E.a.get("https://api.511.org/transit/StopMonitoring?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON&agency=".concat(this.props.agency,"&stopCode=").concat(this.props.stop)).then((function(t){var a=t.data.ServiceDelivery.StopMonitoringDelivery.MonitoredStopVisit;e.props.filterIN&&(a=a.filter((function(t){return e.props.filterIN.includes(t.MonitoredVehicleJourney.LineRef)}))),e.props.filterOUT&&(a=a.filter((function(t){return!e.props.filterOUT.includes(t.MonitoredVehicleJourney.LineRef)}))),e.setState({buss:a})}))}},{key:"render",value:function(){var e,t=s.a.createElement("div",{className:"bust"},"No Tracked Vehicles to show.",s.a.createElement("br",null),s.a.createElement("span",{className:"update",onClick:this.loadBusss},"Check again"),", check your inputs, or check the schedule.");if(this.state.buss[0]){e=this.state.buss[0].MonitoredVehicleJourney.MonitoredCall.StopPointName;var a=0;t=this.state.buss.map((function(e){return s.a.createElement(b,{bus:e,key:a++})}))}return s.a.createElement("div",{className:"buss"},this.props.title?this.props.title:e,s.a.createElement("br",null),t)}}]),t}(s.a.Component),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={buss:[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;"SB"===this.props.match.params.agency.toUpperCase()||"GF"===this.props.match.params.agency.toUpperCase()?E.a.get("https://api.511.org/transit/stoptimetable?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON&OperatorRef=".concat(this.props.match.params.agency.toUpperCase(),"&MonitoringRef=").concat(this.props.match.params.stop.toUpperCase())).then((function(t){console.log(t);var a=t.data.ServiceDelivery.StopMonitoringDelivery.MonitoredStopVisit;e.setState({buss:a})})):E.a.get("https://api.511.org/transit/StopMonitoring?api_key=72939361-85f9-4019-aa55-d62e4e7e2e59&Format=JSON&agency=".concat(this.props.match.params.agency.toUpperCase(),"&stopCode=").concat(this.props.match.params.stop.toUpperCase())).then((function(t){var a=t.data.ServiceDelivery.StopMonitoringDelivery.MonitoredStopVisit;e.setState({buss:a})}))}},{key:"render",value:function(){var e,t=s.a.createElement("div",{className:"bust"},"No Tracked Vehicles to show.",s.a.createElement("br",null),s.a.createElement("span",{className:"update",onClick:function(){return window.location.reload(!1)}},"Check again"),", check your inputs, or check the schedule.");if(this.state.buss[0]){e=this.state.buss[0].MonitoredVehicleJourney.MonitoredCall.StopPointName;var a=0;t=this.state.buss.map((function(e){return s.a.createElement(b,{bus:e,key:a++})}))}return s.a.createElement("div",{className:"transit-on"},s.a.createElement("div",{className:"short-title"},"#",this.props.match.params.stop.toUpperCase(),s.a.createElement("br",null),"\xa0\xa0\xa0\xa0\xa0\xa0",this.props.match.params.agency.toUpperCase()),s.a.createElement("div",{className:"buss"},s.a.createElement("span",{className:"bold"},e),t))}}]),t}(s.a.Component),S=Object(l.f)(M);var C=function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"busemoji"}),s.a.createElement("div",{className:"transit"},s.a.createElement("div",{className:"transit-on"},s.a.createElement(N,{title:"Twenty Fourth Street BART",agency:"BA",stop:"24TH",filterIN:["YL-S"]}),s.a.createElement(N,{title:"Millbrae BART",agency:"BA",stop:"MLBR"}),s.a.createElement(N,{title:"CalTrain MillBrae",agency:"CT",stop:"70062"}),s.a.createElement(N,{title:"CalTrain San Mateo",agency:"CT",stop:"70091"}))))};var D=function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"busemoji"}),s.a.createElement("div",{className:"transit"},s.a.createElement("div",{className:"transit-on"},s.a.createElement(N,{agency:"BA",stop:"NBRK"}),s.a.createElement(N,{agency:"AC",stop:"56144"}),s.a.createElement(N,{agency:"AC",stop:"55327"}),s.a.createElement(N,{agency:"AC",stop:"59600"}),s.a.createElement(N,{agency:"AC",stop:"55165"}))))};var A=function(e){return s.a.createElement(o.a,{basename:"/transitYourself"},s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"transit-master"},s.a.createElement(g,null),s.a.createElement("div",{className:"transit-switcher"},s.a.createElement("div",{className:"transit"},s.a.createElement(l.b,{exact:!0,path:"/"},s.a.createElement(l.a,{to:"/anywherer"})),s.a.createElement(l.b,{exact:!0,path:"/anywherer",component:y}),s.a.createElement(l.b,{exact:!0,path:"/vehicular",component:f}),s.a.createElement(l.b,{exact:!0,path:"/weekender"},s.a.createElement(N,{agency:"GG",stop:"42006"}),s.a.createElement(N,{title:"Van Sess",agency:"GG",stop:"40032"})),s.a.createElement(l.b,{exact:!0,path:"/commuter"},s.a.createElement(N,{agency:"SF",stop:"16513",filterOUT:["8","8X"]}),s.a.createElement(N,{agency:"SF",stop:"16750"}),s.a.createElement(N,{title:"BroadWay",agency:"SF",stop:"13082"})),s.a.createElement(l.b,{path:"/anystop/:agency/:stop",render:function(e){return s.a.createElement(S,e)}}),s.a.createElement(l.b,{exact:!0,path:"/aa",component:C}),s.a.createElement(l.b,{exact:!0,path:"/da",component:D}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.c91cea9f.chunk.js.map