import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SubcategoryOne from './SubcategoryOne/SubcategoryOne';
import SubcategoryTwo from './SubcategoryTwo/SubcategoryTwo';
import SubcategoryThree from './SubcategoryThree/SubcategoryThree';

const SubcategoryTab = () => {
    const [toies, setToies] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/alltoy')
        .then(res => res.json())
        .then(data => setToies(data))
    },[]);
    const subOnes = toies.filter(toy=> toy.categoryId === 1)
    const subTwo = toies.filter(toy=> toy.categoryId === 2)
    const subThree = toies.filter(toy=> toy.categoryId === 3)
    return (
        <div className='p-10 bg-blue-900 text-yellow-50'>
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
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-4'>
                    {
                     subTwo.map(subOne=><SubcategoryTwo
                        key={subOne._id}
                        subOne={subOne}
                     ></SubcategoryTwo>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-4'>
                    {
                     subThree.map(subOne=><SubcategoryThree
                        key={subOne._id}
                        subOne={subOne}
                     ></SubcategoryThree>)
                    }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default SubcategoryTab;