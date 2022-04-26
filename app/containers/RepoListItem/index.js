/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import ListItem from 'components/ListItem';
import IssueIconWrapper from './IssueIconWrapper';
import RepoLink from './RepoLink';
import Wrapper from './Wrapper';

export function RepoListItem(props) {
  const { item } = props;

  // Put together the content of the repository
  const content = (
    <Wrapper>
      <RepoLink href={item.html_url} target="_blank">
        <IssueIconWrapper>
          <img src={item.avatar_url} alt={item.login} />
        </IssueIconWrapper>
        <div>
          <div>{item.login}</div>
          <div>
            <div>{item.type}</div>
          </div>
        </div>
      </RepoLink>
    </Wrapper>
  );

  // Render the content into a list item
  return <ListItem key={`repo-list-item-${item.full_name}`} item={content} />;
}

RepoListItem.propTypes = {
  item: PropTypes.object,
};

export default connect(createStructuredSelector({}))(RepoListItem);
