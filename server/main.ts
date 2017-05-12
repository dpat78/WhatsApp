import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
import * as Moment from 'moment';
import { Chats, Messages, Users } from '../imports/collections';
import { MessageType } from '../imports/models';

Meteor.startup(() => {
    if (Meteor.settings) {
    Object.assign(Accounts._options, Meteor.settings['accounts-phone']);
    SMS.twilio = Meteor.settings['twilio'];
  }
 
   if (Users.collection.find().count() > 0) {
    return;
   }

  if (Chats.find({}).cursor.count() === 0) {
    let chatId;
 
    chatId = Chats.collection.insert({
      title: 'Ethan Gonzalez',
      picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg'
    });
  
  Accounts.createUserWithPhone({
    phone: '+972540000001',
    profile: {
      name: 'Ethan Gonzalez',
      picture: 'https://randomuser.me/api/portraits/men/1.jpg'
    }
  });
 
  Accounts.createUserWithPhone({
    phone: '+972540000002',
    profile: {
      name: 'Bryan Wallace',
      picture: 'https://randomuser.me/api/portraits/lego/1.jpg'
    }
  });
 
  Accounts.createUserWithPhone({
    phone: '+972540000003',
    profile: {
      name: 'Avery Stewart',
      picture: 'https://randomuser.me/api/portraits/women/1.jpg'
    }
  });
 
  Accounts.createUserWithPhone({
    phone: '+972540000004',
    profile: {
      name: 'Katie Peterson',
      picture: 'https://randomuser.me/api/portraits/women/2.jpg'
    }
  });
 
  Accounts.createUserWithPhone({
    phone: '+972540000005',
    profile: {
      name: 'Ray Edwards',
      picture: 'https://randomuser.me/api/portraits/men/2.jpg'
    }
  });
  
    Messages.collection.insert({
      chatId: chatId,
      content: 'You on your way?',
      createdAt: Moment().subtract(1, 'hours').toDate(),
      type: MessageType.TEXT
    });
 
    chatId = Chats.collection.insert({
      title: 'Bryan Wallace',
      picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg'
    });
 
    Messages.collection.insert({
      chatId: chatId,
      content: 'Hey, it\'s me',
      createdAt: Moment().subtract(2, 'hours').toDate(),
      type: MessageType.TEXT
    });
 
    chatId = Chats.collection.insert({
      title: 'Avery Stewart',
      picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg'
    });
 
    Messages.collection.insert({
      chatId: chatId,
      content: 'I should buy a boat',
      createdAt: Moment().subtract(1, 'days').toDate(),
      type: MessageType.TEXT
    });
 
    chatId = Chats.collection.insert({
      title: 'Katie Peterson',
      picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg'
    });
 
    Messages.collection.insert({
      chatId: chatId,
      content: 'Look at my mukluks!',
      createdAt: Moment().subtract(4, 'days').toDate(),
      type: MessageType.TEXT
    });
 
    chatId = Chats.collection.insert({
      title: 'Ray Edwards',
      picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg'
    });
 
    Messages.collection.insert({
      chatId: chatId,
      content: 'This is wicked good ice cream.',
      createdAt: Moment().subtract(2, 'weeks').toDate(),
      type: MessageType.TEXT
    });
  }
});
