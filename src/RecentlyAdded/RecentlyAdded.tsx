import React, { useState } from 'react';
import './RecentlyAdded.css';
import MockDetails from './MockDetails';

const RecentlyAdded = () => {
    const [activeTab, setActiveTab] = useState('recent')
    // React.useState<'recent' | any>();
    const HandleClickTab = (e: string) => {
        setActiveTab(e);
    }

    return (
        <main>
            <nav className='recent_header'>
                <nav>
                    <button onClick={() => HandleClickTab('recent')} className={activeTab === 'recent' ? 'active' : 'inactive'}>
                        Recently Added
                    </button>
                </nav>
                <nav>
                    <button onClick={() => HandleClickTab('favourite')} className={activeTab === 'favourite' ? 'active' : 'inactive'}>
                        Favorited
                    </button>
                </nav>
            </nav>
            <nav className='content'></nav>
            <MockDetails tab={activeTab} />
        </main>
    );
}

export default RecentlyAdded;
