import React from 'react';

const RadioBtn = () => {

    return (
        <div>
           <input type="radio" id="receipe" name="categories" value="receipe"/>
            <label htmlFor="receipe">receipe</label>
            <input type="radio" id="healthcare" name="categories" value="healthcare"/>
            <label htmlFor="healthcare">healthcare</label>
            <input type="radio" id="beautycare" name="categories" value="beautycare"/>
            <label htmlFor="beautycare">beautycare</label>
        </div>
                        )
                        
}
export default RadioBtn;