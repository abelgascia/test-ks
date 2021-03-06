/**
 * Estado inicial de la store de redux con el array de items/clientes y sus datos.
 * @type {(object|array)}
 */
let initialState = {
  items: [
    {
      id: 1,
      name: "Francis Fell",
      ontologist: "William Lewis",
      plates: 4,
      initTime: "2021-01-30 19:52:19",
      endTime: "2021-01-30 19:52:19",
    },
    {
      id: 2,
      name: "Clay Trammel",
      ontologist: "Brian Smith",
      plates: 1,
      initTime: "2021-02-15 00:51:00",
      endTime: "2021-02-15 00:51:00",
    },
    {
      id: 3,
      name: "William Santana",
      ontologist: "Joshua Johnson",
      plates: 9,
      initTime: "2021-02-22 14:22:49",
      endTime: "2021-02-22 14:22:49",
    },
    {
      id: 4,
      name: "Zachary Valez",
      ontologist: "Frank Dehaan",
      plates: 3,
      initTime: "2021-02-22 21:03:48",
      endTime: "2021-02-22 21:03:48",
    },
    {
      id: 5,
      name: "Salvatore Flores",
      ontologist: "Kami Nappi",
      plates: 5,
      initTime: "2021-02-20 13:01:00",
      endTime: "2021-02-20 13:01:00",
    },
    {
      id: 6,
      name: "Frances Johnson",
      ontologist: "Jane Estrada",
      plates: 1,
      initTime: "2021-01-27 05:59:30",
      endTime: "2021-01-27 05:59:30",
    },
    {
      id: 7,
      name: "Michael Alvarado",
      ontologist: "Jean McKay",
      plates: 4,
      initTime: "2021-02-17 05:56:07",
      endTime: "2021-02-17 05:56:07",
    },
    {
      id: 8,
      name: "Mary Harper",
      ontologist: "Stanley Hartnett",
      plates: 7,
      initTime: "2021-02-18 12:22:25",
      endTime: "2021-02-18 12:22:25",
    },
    {
      id: 9,
      name: "Howard Heitzman",
      ontologist: "Margaret Escalante",
      plates: 1,
      initTime: "2021-02-06 14:54:26",
      endTime: "2021-02-06 14:54:26",
    },
    {
      id: 10,
      name: "Patty Ingrassia",
      ontologist: "Elizabeth Howard",
      plates: 5,
      initTime: "2021-01-27 05:59:30",
      endTime: "2021-01-27 05:59:30",
    },
    {
      id: 11,
      name: "Cynthia Strouth",
      ontologist: "Cindy Diaz",
      plates: 2,
      initTime: "2021-02-18 02:41:23",
      endTime: "2021-02-18 02:41:23",
    },
    {
      id: 12,
      name: "Matthew Jaquez",
      ontologist: "Nathan Shannon",
      plates: 1,
      initTime: "2021-02-19 23:18:17",
      endTime: "2021-02-19 23:18:17",
    },
    {
      id: 13,
      name: "Alex Buxton",
      ontologist: "Tom Wake",
      plates: 10,
      initTime: "2021-02-20 13:01:00",
      endTime: "2021-02-20 13:01:00",
    },
    {
      id: 14,
      name: "Rebecca Leger",
      ontologist: "Judith Hauge",
      plates: 2,
      initTime: "2021-01-27 05:59:30",
      endTime: "2021-01-27 05:59:30",
    },
    {
      id: 15,
      name: "Trudy Rose",
      ontologist: "Daniel Bullock",
      plates: 4,
      initTime: "2021-01-30 19:52:19",
      endTime: "2021-01-30 19:52:19",
    },
    {
      id: 16,
      name: "Rosetta McElroy",
      ontologist: "Daniel Wathen",
      plates: 3,
      initTime: "2021-02-15 00:51:00",
      endTime: "2021-02-15 00:51:00",
    },
    {
      id: 17,
      name: "Dewey Rivers",
      ontologist: "Pauline Stanley",
      plates: 7,
      initTime: "2021-02-18 02:41:23",
      endTime: "2021-02-18 02:41:23",
    },
    {
      id: 18,
      name: "Heather Conner",
      ontologist: "Mary Libby",
      plates: 4,
      initTime: "2021-02-14 09:14:22",
      endTime: "2021-02-14 09:14:22",
    },
    {
      id: 19,
      name: "Theresa Bernardo",
      ontologist: "Ronald Legros",
      plates: 9,
      initTime: "2021-02-22 14:22:49",
      endTime: "2021-02-22 14:22:49",
    },
    {
      id: 20,
      name: "Joyce Combs",
      ontologist: "Frank Dubois",
      plates: 1,
      initTime: "2021-02-09 06:47:33",
      endTime: "2021-02-09 06:47:33",
    },
  ],
  loaded: false,
};

/**
 *
 * @param {(object|array)} state - Estado inicial de la store de redux.
 * @param {object} action - Accion a ser ejecutada por el reducer.
 */
const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET":
      return {
        items: action.payload.items,
        loaded: true,
      };
    case "UPDATE":
      let oldState = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            name: action.payload.name,
            ontologist: action.payload.ontologist,
            plates: action.payload.plates,
            initTime: action.payload.initTime,
            endTime: action.payload.endTime,
          };
        } else {
          return item;
        }
      });
      console.log("updating", oldState);
      return {
        ...state,
        items: oldState,
      };
    case "REMOVE":
      return {
        items: [...state.items.filter((item) => item.id !== action.payload.id)],
      };
    case "RELOAD":
      return initialState;
    default: {
      return state;
    }
  }
};

export default dataReducer;
