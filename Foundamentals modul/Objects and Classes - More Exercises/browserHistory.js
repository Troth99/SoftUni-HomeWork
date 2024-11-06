function borwserHistory(browserObject, actions) {
    
let browserName = browserObject["Browser Name"]
let openTabs = browserObject["Open Tabs"];
let recentlyClosed = browserObject["Recently Closed"];
let browserLogs = browserObject["Browser Logs"]

for (let i = 0; i < actions.length; i++)
{
    let action = actions[i]

    if (action.startsWith('Open ')){
        let site = action.slice(5)
        openTabs.push(site)
        browserLogs.push(action)
    }else if (action.startsWith(`Close `)){
        let site = action.slice(6)
        let siteIndex = openTabs.indexOf(site)

        if (siteIndex !== -1){
            openTabs.splice(siteIndex,1)
            recentlyClosed.push(site)
            browserLogs.push(action)
        }
    }else if ( action === `Clear History and Cache`){
        openTabs.length = 0
        recentlyClosed.length = 0
        browserLogs.length = 0
    }
}

console.log(`${browserName}`);
console.log(`Open Tabs: ${openTabs.join(`, `)}`);
console.log(`Recently Closed: ${recentlyClosed.join(`, `)}`);
console.log(`Browser Logs: ${browserLogs.join(`, `)}`);




}

borwserHistory({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
    "Recently Closed":["Yahoo","Gmail"],
    "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
)