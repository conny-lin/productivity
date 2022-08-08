function colorCalendarPresetScheme(e) {

    var calendar = CalendarApp.getCalendarById('connylin318@gmail.com');
    var beginDate = new Date(e.values[1]);
    var endDate = new Date(e.values[2]);  
    var events = calendar.getEvents(beginDate, endDate);
  
    var grayArray = ['GTD','GTD Sat/Sun','GTD Weekly','Wrap up work','Learning','GTD x'];
    var paleRedArray = ['Morning Routine','Weekend Beauty Routine','Exercise','Exercise with Sam','After work break','Quiet Night', 'Quiet Night x','Night Routine', 'Night Routine x','Sleep', 'Sleep x'];
  
    var yellowArray = ['SC Team Sync','SC Art Sync','Rob/Conny Career Sync','SC DD sync','Conny / Daria 1:1','SC & Sports Art Weekly Sync','WCS DD Connect','SC Design/Art Sync','SC Biweekly Lead Sync','Jenny 1:1','Globant Biweekly','SC DD Sync (Th)','Conny / Rob biweekly sync','Guillermo 1:1'];
    var orangeArray = ['SC weeky playtest','SC Biweekly Deconstruction of Fun','SC Friday Fun','SC Social time','SC Design Sync','WCS Fireside Chat'];
    var redArray = ['Fun Club meeting','IDEA Meeting','Allyship meeting'];
  
    var blueArray = ['Get zoom link: SC Team Sync slides','Set up new slides: SC Team sync','Final Check: SC Team Sync slide','PTO freshsheet: publish','PTO freshsheet: make + validate','Task SC Art Sync','Prep SC Art Sync','Prep Meeting: Daria','Sports Art/DCL date/agenda update','Call agenda: SC Design/Art Sync','Prep SC Design/Art Sync','Prep SC Design/Art Sync','Prep Jenny Meeting','Slack Shoutout','check Jaas afternoon','JaaS Morning','Check Jaas noon','Check Jaas noon x'];
    var cyanArray = ['Check FUN club tasks','FUN club agenda','Prep Fun club meeting','FUN club minutes','Prepare Career Sync with Rob','Check IDEA tasks','Make agenda: IDEA','Prep IDEA meeting','IDEA Meeting notes','Prep Allyship meeting','Allyship impact note','Finalize Allyship content','Share out allyship agenda','Determine allyship topic','Prep WCS DD Connect','Prep - Conny / Rob biweekly sync','Betterworks Goal Review'];
  
    var mauveArray = [];
    var paleBlueString = ['HirePhD prep meeting','HirePhD prep meeting','HirePhd Jira Sprint Reset'];
    var greenArray = ['GSS Council'];
    var paleGreenArray = ['Go home from work','Go to work','Go to GSS Council/Prep','Go home from work x'];
  
    for (var i=0; i<events.length; i++) {
      var event = events[i];
      var title = event.getTitle();
      if (paleBlueString.includes(title)) {
          event.setColor(CalendarApp.EventColor.PALE_BLUE); 
      } else if (paleGreenArray.includes(title)) {
          event.setColor(CalendarApp.EventColor.PALE_GREEN); 
      } else if (mauveArray.includes(title)) {
          event.setColor(CalendarApp.EventColor.MAUVE); 
      } else if (paleRedArray.includes(title)) {
          event.setColor(CalendarApp.EventColor.PALE_RED); 
      } else if (yellowArray.includes(title)) {
          event.setColor(CalendarApp.EventColor.YELLOW); 
      } else if (orangeArray.includes(title)) {
          event.setColor(CalendarApp.EventColor.ORANGE); 
      } else if (cyanArray.includes(title)) {
          event.setColor(CalendarApp.EventColor.CYAN); 
      } else if (grayArray.includes(title)) {
          event.setColor(CalendarApp.EventColor.GRAY); 
      } else if (blueArray.includes(title)) {
          event.setColor(CalendarApp.EventColor.BLUE); 
      } else if (greenArray.includes(title)) {
          event.setColor(CalendarApp.EventColor.GREEN); 
      } else if (redArray.includes(title)) {
          event.setColor(CalendarApp.EventColor.RED); 
      }
    }
  }