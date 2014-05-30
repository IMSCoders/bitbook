using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.AspNet.SignalR;
using System.Configuration;

[assembly: OwinStartup(typeof(BitBookHub.Startup))]

namespace BitBookHub
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            HubConfiguration config = new HubConfiguration();
            var connectionString = ConfigurationManager.AppSettings["signalRScaleOut"];
            var sqlConfig= new SqlScaleoutConfiguration(connectionString) { 
            TableCount=5
            };
            //GlobalHost.DependencyResolver.UseSqlServer(sqlConfig);
            config.EnableJavaScriptProxies = true;
            config.EnableDetailedErrors = true;
            config.EnableJSONP = true;
            app.MapSignalR(config);
        }
    }
}
