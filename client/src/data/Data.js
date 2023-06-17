
// Hotels By City
import Eritrea from "../assets/Massawa.jpg";
import Thailand from "../assets/thailand.jpg";
import Germany from "../assets/germany.jpg";

// Hotel Bed rooms
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";
import room4 from "../assets/room4.jpg";
import room5 from "../assets/room5.jpg";
import room6 from "../assets/room6.jpg";
import room7 from "../assets/room7.jpg";
import room8 from "../assets/room8.jpg";
import room9 from "../assets/room9.jpg";
import room10 from "../assets/room10.jpg";
import room11 from "../assets/room11.jpg";
import room12 from "../assets/room12.jpg";
import room13 from "../assets/room13.jpg";
import room14 from "../assets/room14.jpg";
import room15 from "../assets/room15.jpg";

// Traditional Hotels
import traditionalHotel1 from "../assets/traditional-hotel-1.jpg";
import traditionalHotel2 from "../assets/traditional-hotel-2.jpg";
import traditionalHotel3 from "../assets/traditional-hotel-3.jpg";
import traditionalHotel4 from "../assets/traditional-hotel-4.jpg";
// Hotel Images
import Hotel1 from "../assets/hotel1.jpg";
import Hotel2 from "../assets/hotel2.jpg";
import Hotel3 from "../assets/hotel3.jpg";
import Hotel4 from "../assets/hotel4.jpg";
import Hotel5 from "../assets/hotel5.jpg";
import Hotel6 from "../assets/hotel6.jpg";

// Hotel Images in an array format
export const Hotels = [
    {
        image: Hotel1,
        name: "Massawa Hotel"
    },
    {
        image: Hotel2,
        name: "Ethiopian Hotel"
    },
    {
        image: Hotel3,
        name: "Thailand Hotel"
    },
    {
        image: Hotel4,
        name: "Thailand Hotel"
    },
    {
        image: Hotel5,
        name: "Dubai Hotel"
    },
    {
        image: Hotel6,
        alt: "Nederland Hotel Image"
    },
   
]

// Hotels By City

export const hotelByCountry = [
    {
        image: Germany,
        title: "Start Hotel",
        property: "Properties"
    }, 
    {
        image: Thailand,
        title: "Hilton Hotel",
        property: "Properties"
    }, 
    {
        image: Eritrea,
        title: "Readsea Hotel",
        property:"Properties" 
    }, 
]

// Hotel Bed rooms
export const rooms = [
    {
        image: room1,
        alt: "Nederland hotel image", 
    }, 
    {
        image: room2,
        alt: "Thailand hotel image"
    }, 
    {
        image: room3,
        alt: "Eritrea hotel image" 
    }, 
    {
        image: room4,
        alt: "Eritrea hotel image" 
    },
    {
        image: room5,
        alt: "Eritrea hotel image" 
    },
    {
        image: room6,
        alt: "Eritrea hotel image" 
    },

    {
        image: room7,
        alt: "Nederland hotel image", 
    }, 
    {
        image: room8,
        alt: "Thailand hotel image"
    }, 
    {
        image: room9,
        alt: "Eritrea hotel image" 
    }, 
    {
        image: room10,
        alt: "Eritrea hotel image" 
    },
    {
        image: room11,
        alt: "Eritrea hotel image" 
    },

    {
        image: room12,
        alt: "Thailand hotel image"
    }, 
    {
        image: room13,
        alt: "Eritrea hotel image" 
    }, 
    {
        image: room14,
        alt: "Eritrea hotel image" 
    },
    {
        image: room15,
        alt: "Eritrea hotel image" 
    }
]

// Traditional Hotels
export const TraditionalHotels =  [
    {
        image: traditionalHotel1,
        title: "Barka Hotel",
        city: "Nererland",
        price:"Starting from $120",
        rating: "8.3",
        level: "Very good"
    }, 
    {
        image: traditionalHotel2,
        title: "Traditional-G Hotel",
        city: "Thailand",
        price:"Starting from $150",
        rating: "8.9",
        level: "Excellent"
    }, 
    {
        image: traditionalHotel3,
        title: "Keren Hotel",
        city: "Keren",
        price:"Starting from $120",
        rating: "8.7",
        level: "Quite good" 
    }, 
    {
        image: traditionalHotel4,
        title: "Massawa Hotel",
        city: "Massawa",
        price:"Starting from $170",
        rating: "9",
        level: "Excellent" 
    }
]

// Footer Lists 
export const FooterLists = [
    {
        country: "country",
        region: "region",
        city: "city",
        district: "district",
        airport: "airport",
        hotel: "hotel",
    },
    {
        country: "country",
        region: "region",
        city: "city",
        district: "district",
        airport: "airport",
        hotel: "hotel",
    },
    {
        country: "country",
        region: "region",
        city: "city",
        district: "district",
        airport: "airport",
        hotel: "hotel",
    },
    {
        country: "country",
        region: "region",
        city: "city",
        district: "district",
        airport: "airport",
        hotel: "hotel",
    },
    {
        country: "country",
        region: "region",
        city: "city",
        district: "district",
        airport: "airport",
        hotel: "hotel",
    }
]

// List of hotels search items
export const lisaHotels = [
    {
        image: room1,
        title: "Tower Street Apartments",
        distance: "500m from center",
        taxi: "Free airport taxi",
        apartment: "Studio Apartment with Air conditioning",
        features: "Entire studio . 1 bathroom . 21m² 1 full bed",
        cancellation: "Free cancellation",
        flexibility: "You can cancel later, so lock in this great price today",
        evaluation: "Excellent",
        rating: 9.4,
        price: "150",
        gross: "Includes taxes and fees",
        availability: "See Availability"
    },

    {
        image: room2,
        title: "Tower Street Apartments",
        distance: "500m from center",
        taxi: "Free airport taxi",
        apartment: "Studio Apartment with Air conditioning",
        features: "Entire studio . 1 bathroom . 21m² 1 full bed",
        cancellation: "Free cancellation",
        flexibility: "You can cancel later, so lock in this great price today",
        evaluation: "Excellent",
        rating: 9.4,
        price: 150,
        gross: "Includes taxes and fees",
        availability: "See Availability"
    },

    {
        image: room3,
        title: "Tower Street Apartments",
        distance: "500m from center",
        taxi: "Free airport taxi",
        apartment: "Studio Apartment with Air conditioning",
        features: "Entire studio . 1 bathroom . 21m² 1 full bed",
        cancellation: "Free cancellation",
        flexibility: "You can cancel later, so lock in this great price today",
        evaluation: "Excellent",
        rating: 9.4,
        price: 150,
        gross: "Includes taxes and fees",
        availability: "See Availability"
    },
    {
        image: room4,
        title: "Tower Street Apartments",
        distance: "500m from center",
        taxi: "Free airport taxi",
        apartment: "Studio Apartment with Air conditioning",
        features: "Entire studio . 1 bathroom . 21m² 1 full bed",
        cancellation: "Free cancellation",
        flexibility: "You can cancel later, so lock in this great price today",
        evaluation: "Excellent",
        rating: 9.4,
        price: 150,
        gross: "Includes taxes and fees",
        availability: "See Availability"
    },
    {
        image: room5,
        title: "Tower Street Apartments",
        distance: "500m from center",
        taxi: "Free airport taxi",
        apartment: "Studio Apartment with Air conditioning",
        features: "Entire studio . 1 bathroom . 21m² 1 full bed",
        cancellation: "Free cancellation",
        flexibility: "You can cancel later, so lock in this great price today",
        evaluation: "Excellent",
        rating: 9.4,
        price: 150,
        gross: "Includes taxes and fees",
        availability: "See Availability"
    },
    {
        image: room6,
        title: "Tower Street Apartments",
        distance: "500m from center",
        taxi: "Free airport taxi",
        apartment: "Studio Apartment with Air conditioning",
        features: "Entire studio . 1 bathroom . 21m² 1 full bed",
        cancellation: "Free cancellation",
        flexibility: "You can cancel later, so lock in this great price today",
        evaluation: "Excellent",
        rating: 9.4,
        price: 150,
        gross: "Includes taxes and fees",
        availability: "See Availability"
    },
    {
        image: room7,
        title: "Tower Street Apartments",
        distance: "500m from center",
        taxi: "Free airport taxi",
        apartment: "Studio Apartment with Air conditioning",
        features: "Entire studio . 1 bathroom . 21m² 1 full bed",
        cancellation: "Free cancellation",
        flexibility: "You can cancel later, so lock in this great price today",
        evaluation: "Excellent",
        rating: 9.4,
        price: 150,
        gross: "Includes taxes and fees",
        availability: "See Availability"
    },
]