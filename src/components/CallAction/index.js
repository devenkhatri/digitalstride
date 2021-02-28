import React from 'react'

const CallAction = (props) => {
    const {content} = props;
    return (
        <div className='columns mt-6 hero is-primary is-bold'>
            <div class="hero-body">
                <div class="container">
                    <div class="is-max-w-lg mx-auto has-text-centered">
                        <span class="tag is-warning is-rounded">{content.heading}</span>
                        <h2 class="mb-1 title">{content.title}</h2>
                        <div class="content has-text-white">{content.subtitle}</div>
                        <div class="mt-5"><a class="button is-light" href="/contact-us">{content.buttontext}</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CallAction;