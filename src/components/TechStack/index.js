import React from 'react'

const TechStack = (props) => {
    const { logos, title="Tech Stack", subtitle="Some of the major technology stacks, we expertise in..." } = props
    return (
        <div className="notification is-primary is-light has-text-grey p-6">
            <h2 className="title has-text-centered mb-1 is-spaced">{title}</h2>
            <h4 className="subtitle has-text-centered">{subtitle}</h4>
            <div className='columns box is-multiline is-centered is-vcentered'>
                {logos && logos.map((item) => (
                    <div className='column is-2 has-text-centered px-6 py-1'>
                        <img src={item.image} title={item.title} />                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TechStack;