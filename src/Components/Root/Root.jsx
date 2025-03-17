import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../Home/Home';
import SearchResults from '../SearchResults/SearchResults';
import SeeAvailability from '../SearchResults/SeeAvailability/SeeAvailability';
import HotelDescription from '../Hotel-Description/HotelDescription';
import BookingForm from '../BookingForm/BookingForm';

const myCreatedRoute = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/search-results', 
        element: <SearchResults></SearchResults>,
      },
      {
        path: '/availability',
        element: <SeeAvailability></SeeAvailability>
      },
      {
        path: 'hotel-description',
        element: <HotelDescription></HotelDescription>
      },
      {
        path: 'booking-form',
        element: <BookingForm></BookingForm>
      }
    ],
  },
]);

export default myCreatedRoute;