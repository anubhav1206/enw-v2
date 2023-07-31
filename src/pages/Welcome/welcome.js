import React from 'react';
import { Rain } from 'react-rainfall';
import Button from '../../components/Button/Button';
import '../../assets/styles/button.scss';
import '../../assets/styles/welcome.scss';

const WelcomePage = () => {
    const handleClick = () => {
    };
    
  return (
    <main>
        {/* Container for the Rain component */}
        <div className="rain-container">
            <Rain />
        </div>
        <div>
            <div className="welcome-page">
                <h1 className="title">Welcome to My Notebook App</h1>
                <p>
                    Hello and welcome to my notebook app! When I began my journey of learning through an Udemy course, 
                    my friend gave me a brilliant suggestion - take notes to remember everything effectively. 
                    So, I decided to create this webpage, where I can organize various topics and jot down new information, 
                    just like creating a post on Facebook.
                </p>
                <p>
                    The idea is simple - you can select different topics that interest you, and then easily add new information, 
                    insights, or thoughts. This way, you'll have your personalized digital notebook, always accessible and helping you 
                    retain knowledge more efficiently.
                </p>
                <p>
                    I hope you find this notebook app as helpful as I do! Feel free to explore, create new posts, 
                    and enrich your learning experience. 
                    Happy note-taking!
                </p>
                <Button class="btn-flip" label="Click Me" onClick={handleClick} />
            </div>
        </div>
    </main>
  );
};

export default WelcomePage;
