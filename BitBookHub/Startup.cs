using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.AspNet.SignalR;
using System.Configuration;
using Microsoft.Owin.Cors;
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
            app.Map("/signalr", map =>
            {
               
                map.UseCors(CorsOptions.AllowAll);
                
                // Run the SignalR pipeline. We're not using MapSignalR
                // since this branch already runs under the "/signalr"
                // path.
                map.RunSignalR(config);
            });
            
        }
    }
}
