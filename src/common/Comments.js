import React from "react";

const Comments = () => {
  return (
    <div className="comment">
      <div className="comment__wrapper">
        <div>
          <h3 className="comment__reply-title">Leave a Reply</h3>
          <form className="comment-form">
            <p className="comment__notes">
              <span>Your email address will not be published.</span>
              Required fields are marked <span className="required">*</span>
            </p>
            <p className="comment-form-comment">
              <label htmlFor="comment">Comment</label>
              <textarea
                className="comment__textarea"
                placeholder="Type Your Comment"
                id="comment"
                name="comment"
                cols="45"
                rows="5"
                maxLength="65525"
                required="required"
              ></textarea>
            </p>
            <p className="comment-form-author">
              <label htmlFor="author">
                Name <span className="required">*</span>
              </label>
              <input
                placeholder="Full Name"
                id="author"
                name="author"
                type="text"
                value=""
                size="30"
                maxLength="245"
                required="required"
                className="w-full border border-gray-300"
              />
            </p>
            <p className="comment-form-email">
              <label htmlFor="email">
                Email <span className="required ">*</span>
              </label>
              <input
                placeholder="Email"
                id="email"
                name="email"
                type="email"
                value=""
                size="30"
                maxLength="100"
                required="required"
                className="w-full border border-gray-300"
              />
            </p>
            <p className="comment-form-url">
              <label htmlFor="url">Website</label>{" "}
              <input
                className="w-full border border-gray-300"
                placeholder="Website"
                id="url"
                name="url"
                type="url"
                value=""
                size="30"
                maxLength="200"
              />
            </p>
            <p className="comment__cookies">
              <input
                id="wp-comment-cookies-consent"
                name="wp-comment-cookies-consent"
                type="checkbox"
                value="yes"
              />
              <label htmlFor="wp-comment-cookies-consent">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </p>
            <p className="form-submit ">
              <button className="default-btn mt-8">Post a comment</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comments;
