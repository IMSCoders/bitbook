using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.AspNet.SignalR;

[assembly: OwinStartup(typeof(FrontEnd.Startup))]

namespace FrontEnd
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            HubConfiguration config = new HubConfiguration();
            config.EnableJavaScriptProxies = true;
            config.EnableDetailedErrors = true;
            config.EnableJSONP = true;
            app.MapSignalR(config);
        }
    }
}
