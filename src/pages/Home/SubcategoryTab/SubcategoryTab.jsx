import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SubcategoryOne from './SubcategoryOne/SubcategoryOne';

const SubcategoryTab = () => {
    const [toies, setToies] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/alltoy')
        .then(res => res.json())
        .then(data => setToies(data))
    },[]);
    const subOnes = toies.filter(toy=> toy.categoryId === 1)
    return (
        <div className='p-10 bg-blue-950 text-yellow-50'>
            <h1 className='text-4xl text-center'>Category</h1>
            <Tabs>
                <TabList>
                    <Tab>Building Sets</Tab>
                    <Tab>Role-Playing</Tab>
                    <Tab>Remote Control</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-4'>
                    {
                     subOnes.map(subOne=><SubcategoryOne
                     key={subOne._id}
                     subOne={subOne}
                     ></SubcategoryOne>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SubcategoryTab;