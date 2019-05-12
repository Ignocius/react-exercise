import React, { PureComponent } from 'react';

class Card extends PureComponent {
    render() {
        const { name, email, id } = this.props
        return (
            <div className='tc bg-washed-blue  dib br3 pa3 ma2 grow shadow-5'>
                <img src={`https://robohash.org/${id}?200x200`} alt="robots"/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
    }
}

export default Card;