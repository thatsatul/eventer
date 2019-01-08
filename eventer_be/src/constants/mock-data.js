export const eventsData = {
  data: [
    {
      id: 1,
      description: "2.0 Movie",
      eventDate: new Date(Date.now() + 2000),
    },
    {
      id: 2,
      description: "Badminton",
      eventDate: new Date(Date.now() - 1000),
    },
    {
      id: 3,
      description: "Trekking",
      eventDate: new Date(Date.now() + 5000),
    },
  ],
};

export const eventData = {
  id: 1,
  description: "Aquaman English",
  eventorComments: "Planning + Inventory + Suggestions",
  category: "movie",
  timeStamp: 19213213123,
  primaryLocation: {
    latLng: "74.123123, 102.2131233",
    address: "Amb cinemas",
  },
  suggestion: [
    {
      id: 1,
      description: 'Lets go to trek',
      suggestedBy: {
        userId: 2,
        userName: 'Atul',
      },
      upvoted: 4,
      downvoted: 2,
    },
    {
      id: 1,
      description: 'lets go on friday',
      suggestedBy: {
        userId: 1,
        userName: 'Nagesh',
      },
      upvoted: 5,
      downvoted: 1,
    },
  ],
  importantFiles: [
    {
      id: 1,
      description: "Movie Ticket",
    },
  ],
  primaryPayment: {
    id: 1,
    name: "Nagesh",
    total: 1400,
  },
  otherInfo: {
    route: null, // we can show route according to user selection for any trip,
    extractedInfo: {
      rating: {
        imdb: {
          users: 3000,
          value: "4.2/5",
          reviews: [],
        }
      }
    }
  },
  attendees: {
    1: {
      name: "Nagesh",
      isJoining: "yes",
      extraAttendees: 3,
      myExpense: 300,
      needToPay: 400,
      distributedBalance: 700,
    },
    2: {
      name: "Atul",
      isJoining: "pending",
      extraAttendees: 0,
      myExpense: 100,
      needToPay: 600,
      distributedBalance: 700,
    }
  },
  galleryId: 345,
  conversationId: 222,
};
