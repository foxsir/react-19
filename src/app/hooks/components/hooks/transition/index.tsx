import { Suspense, useState } from 'react';
import TabButton from './TabButton.js';
import AboutTab from './AboutTab.js';
import PostsTab from './PostsTab.js';
import ContactTab from './ContactTab.js';

export default function TabContainer() {
  const [tab, setTab] = useState('about');
  return (
    <Suspense fallback={<h1>🌀 Loading...</h1>}>
      <div className={'flex gap-2'}>
        <TabButton
          isActive={tab === 'about'}
          action={() => setTab('about')}
        >
          About
        </TabButton>
        <TabButton
          isActive={tab === 'posts'}
          action={() => setTab('posts')}
        >
          Posts
        </TabButton>
        <TabButton
          isActive={tab === 'contact'}
          action={() => setTab('contact')}
        >
          Contact
        </TabButton>
      </div>
      <hr />
      {tab === 'about' && <AboutTab />}
      {tab === 'posts' && <PostsTab />}
      {tab === 'contact' && <ContactTab />}
    </Suspense>
  );
}
