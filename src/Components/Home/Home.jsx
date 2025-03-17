import React from 'react';
import PropertyList from './PropertyList';
import RecentSearches from './RecentSearches';
import TrendingDestinations from './TrendingDestinations';
import Explorecountry from './Explorecountry';
import TripPlanner from './TripPlanner';
import Propertytype from './Propertytype';
import Weekenddeals from './Weekenddeals';
import UniqueProperties from './UniqueProperties';
import Travel from './Travel';
import GuestRoom from './GuestRoom';

const Home = () => {
    return (
        <div>
            <PropertyList></PropertyList>
            <RecentSearches></RecentSearches>
            <TrendingDestinations></TrendingDestinations>
            <Explorecountry></Explorecountry>
            <TripPlanner></TripPlanner>
            <Propertytype></Propertytype>
            <Weekenddeals></Weekenddeals>
            <UniqueProperties></UniqueProperties>
            <Travel></Travel>
            <GuestRoom></GuestRoom>
        </div>
    );
};

export default Home;