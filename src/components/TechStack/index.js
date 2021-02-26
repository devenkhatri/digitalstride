import React from 'react'

const TechStack = (props) => {
    const { logos, title="Tech Stack", subtitle="Some of the major technology stacks, we expertise in..." } = props
    return (
        <>
            <h2 className="title has-text-centered mb-1 mt-4">{title}</h2>
            <h4 className="sub-title has-text-centered mb-5">{subtitle}</h4>
            <div className='columns box is-multiline is-centered is-vcentered'>
                {logos && logos.map((item) => (
                    <div className='column is-2 has-text-centered'>
                        <img className="px-6 py-1" src={item.image} title={item.title} />                        
                    </div>
                ))}
            </div>
        </>
    );
}

export default TechStack;