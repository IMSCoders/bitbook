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
        [HubMethodName("sendToAll")]
        public void SendToAll(string name, string message)
        {
            Clients.All.broadcastMessage(name, message);
        }

        [HubMethodName("joinGroupByOwnName")]
        public void JoinGroupByOwnName(string userName)
        {
            Groups.Add(Context.ConnectionId, userName);
        }

        [HubMethodName("singleGroupNotice")]
        public void SingleGroupNotice(string groupName, string notificationMessage, string notificationTypeId)
        {
            Clients.Group(groupName).receiveNotification(notificationMessage, notificationTypeId);
        }
        public void Send(string name, string message)
        {
            Clients.All.broadcastMessage(name, message);

        }
    }
}