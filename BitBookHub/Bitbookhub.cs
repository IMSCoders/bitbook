using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace BitBookHub
{
    [HubName("BitBookHub")]
    public class Bitbookhub : Hub
    {
        [HubMethodName("")]
        public void Send(string name, string message)
        {
            Clients.All.broadcastMessage(name, message);

        }

        [HubMethodName("IncludeTime")]
        public void IncludeTime(string time)
        {
            //Clients.All.broadcastTime(time);
            Clients.All.broadCastTime(time);

        }
    }
}