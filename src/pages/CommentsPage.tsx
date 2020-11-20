import React, { useState, useEffect } from 'react';
import { Button, DropdownButton, Dropdown, Spinner } from 'react-bootstrap';
import { Header } from '../components/index';
import { getComments, getPosts } from '../components/functions';

function CommentsPage() {
  const [allPosts, setAllPosts] = useState([]);
  const [post, setPost] = useState('');
  const [comments, setComments] = useState([]);
  const [ddlLabel, setDdlLabel] = useState('Choisir un Post Id ...');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const resp = getPosts();
    resp.then((response) => {
      setAllPosts(response.data);
      setLoading(false);
    });
  }, []);

  const handleChangePost = (e: any) => {
    setPost(e.target.value);
  };

  const handlePostsChange = (e: any) => {
    setDdlLabel(e);
    setPost(e);
  };

  const handleGetComments = () => {
    setLoading(true);
    const res = getComments(post);
    res.then((response) => {
      setComments(response.data);
      setLoading(false);
    });
  };

  const postListTsx = allPosts.map((postItem: any) => {
    return (
      <Dropdown.Item eventKey={postItem.id} key={postItem.id}>
        {postItem.id}
      </Dropdown.Item>
    );
  });

  let commentListTsx;

  if (comments.length > 0) {
    commentListTsx = comments.map((item: any, index: number) => {
      const itemDate = item.publishDate;
      const strDate = itemDate.substring(0, 10);
      const strTime = itemDate.substring(11, 19);
      if (index < 2) {
        return (
          <div key={item.id} className="post-wrapper">
            <img src={item.owner.picture} alt={item.owner.firstName} />
            <div className="post-content">
              <p className="author">{`${item.owner.firstName} ${item.owner.lastName}`}</p>
              <p className="date">le {`${strDate} à ${strTime}`}</p>
              <p className="message">{item.message}</p>
            </div>
          </div>
        );
      }
      return true;
    });
  } else {
    commentListTsx = (
      <p className="empty">
        Il n&apos; y a pas de commentaires disponible. Veuillez choisir un autre
        post.
      </p>
    );
  }

  return (
    <>
      <Header />
      <div className="comments-wrapper">
        <div className="comment-form">
          <div className="form-group">
            <label>Entrer l&apos; Id du post</label>
            <input
              type="text"
              onChange={handleChangePost}
              value={post}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Ou choisissez un post parmi la liste</label>
            <DropdownButton
              title={ddlLabel}
              id="dropdown-posts"
              onSelect={handlePostsChange}
              disabled={loading}
            >
              {postListTsx}
            </DropdownButton>
          </div>
          <Button
            variant="success"
            onClick={handleGetComments}
            className="btn-w-spinner"
            disabled={post === ''}
          >
            {loading ? (
              <Spinner animation="border" />
            ) : (
              'Récupérer les 2 derniers commentaires'
            )}
          </Button>
        </div>
        <div className="comment-list">{commentListTsx}</div>
      </div>
    </>
  );
}

export default CommentsPage;
