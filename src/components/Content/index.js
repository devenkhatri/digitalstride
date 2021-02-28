import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

const Bold = ({ children }) => <b>{children}</b>;

const Text = ({ children }) => <p className="align-center">{children}</p>;

const Image = ({children}) => <figure className="image">{children}</figure>;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  }
};

export const HTMLContent = (props) => {
  const { content, className } = props
  return (
    <div className={`content ${className||''}`} dangerouslySetInnerHTML={{ __html: content }} />
  )
}

export const ContentfulHTMLContent = (props) => {
  const { content, className } = props
  return (
    <HTMLContent className={className} content={documentToHtmlString(content)} />
  )
}

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

export default Content
