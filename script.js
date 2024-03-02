function init(){
    //TODO:
    // - set calendar to current month, year, day
    // - assign appropriate dateOfMonth value to each 'dateBoxX' element(where X=0->34) to correctly display month
    // - give current date's dateBox element "today" class
    // - give any dateBox elements not included in current month "outsideCurrentMonth" class
    // - clear all sample events, 
    // - call load events from google calendar and mobilize
    // - if more than 2 events in a day:
    //      - place showMoreButton item under the 2nd event
    //      - apply appropriate value to "howManyMore"
    //      - set display:none; for rest of events in list
}
function loadGoogleCalendarEvents(){
    //TODO:
    // - pull list of public Google Calendar events for the displayed 35-day window
    // - format & display list of events on the calendar
}
function loadMobilizeEvents(){
    //TODO:
    // - pull list of public Google Calendar events for the displayed 35-day window
    // - format & display list of events on the calendar
}
function switchMonth(x){
    //TODO:
    // - re-initialize calendar to display the new requested month (value of x as +1 or -1)'s dates
    // - re-load google calendar and mobilize events for new month
    if(x==-1){
    //  prev month
    }else if(x==1){
    //  next month
    }else{ 
    //  error
        return -1;
    }
}
function showMoreEvents(selectedDay){
    //TODO:
    // - fill in list with info for all events in the day
    // - add an <hr> between each list item
    document.getElementById("listSidebar").style.width = "250px";
    document.getElementById(selectedDay).focus();
}
function closeList() {
    document.getElementById("listSidebar").style.width = "0";
}
function showInfo() {
    //TODO:
    // - update date/time/name/desc/loc/rsvp link to the selected event's info 
    // - display:none; for any empty/non-applicable fields
    document.getElementById("infoSidebar").style.width = "250px";
}
function closeInfo() {
    document.getElementById("infoSidebar").style.width = "0";
}