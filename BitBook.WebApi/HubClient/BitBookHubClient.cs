using Microsoft.AspNet.SignalR.Client;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;

namespace BitBook.WebApi.HubClient
{
    public class BitBookHubClient
    {
        IHubProxy proxy;
        HubConnection connection;
        private static BitBookHubClient hubClient = new BitBookHubClient();
        private  BitBookHubClient()
        {
            connection = new HubConnection(ConfigurationManager.AppSettings["bitbookHubURL"]);
            proxy = connection.CreateHubProxy(ConfigurationManager.AppSettings["bitBookHubName"]);
            connection.Start().Wait();
        }
        public static BitBookHubClient ReturnInstance()
        {
            return hubClient;
        }
        public void SendNewPostToHome(string username, string postID)
        {
            proxy.Invoke("singleGroupNotice", username, postID);
        }
    }
}