import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

const Bold = ({ children }) => <b>{children}</b>;

const Text = ({ children }) => <p className="align-center">{children}</p>;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>
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
    <div className={`content ${className||''}`}>
      {documentToReactComponents(content, options)}
    </div>
  )
}

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

export default Content
