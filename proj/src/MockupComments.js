import React, { useState } from "react";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import { Label } from "semantic-ui-react";
const CommentExampleComment = (firebase, dataComment) => {
  const [mock, setMock] = useState(0);
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  const postComment = () => {
    var dbCon = firebase.firebase.database().ref("/comment");
    dbCon.push(
      {
        message: JSON.stringify({
          topicId: "5j2chggk44a2",
          displayName: "name",
          content: text,
        }),
      },
      () => {
        setText("");
      }
    );
  };

  return (
    <div style={{ marginTop: 50 }}>
      <button onClick={() => console.log(dataComment)}>test </button>
      <Comment.Group>
        <Header as="h3" dividing>
          Comments
        </Header>
        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
          <Comment.Content>
            <Comment.Author as="a">Matt</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>
              {" "}
              <p>ค่าเก็บขยะ ค่าทำความสะอาดถนนมันไม่น้อยนะ</p>
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
        <Comment>
          <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
          <Comment.Content>
            <Comment.Author as="a">
              <div style={{ color: "red" }}>
                <h5>ส.ส.สิทธิคุณ</h5>
              </div>
            </Comment.Author>
            <Comment.Metadata>
              <div>Yesterday at 12:30AM</div>
            </Comment.Metadata>
            <Comment.Text>
              <p>
                ในปีนี้ ทางส่วนกลางได้สร้างโรงงานรีไซเคิลเพิ่มครับ
                เพื่อเป็นการรักษาสิ่งแวดล้อมอย่างยั่งยืน
              </p>
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action>Upvote</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          <Comment.Group>
            <Comment>
              <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
              <Comment.Content>
                <Comment.Author as="a">Jenny Hess</Comment.Author>
                <Comment.Metadata>
                  <div>Just now</div>
                </Comment.Metadata>
                <Comment.Text>
                  <p>หายสงสัยแล้วนะ</p>
                </Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Upvote</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Comment>
        {mock ? (
          <Comment>
            <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
            <Comment.Content>
              <Comment.Author as="a">
                <h5>กรุงเทพ ในฝัน</h5>
              </Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>
                {" "}
                <p>{text}</p>
              </Comment.Text>
              <Comment.Actions>
                <Comment.Action>Upvote</Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        ) : (
          <div></div>
        )}

        <Form reply>
          <Form.TextArea
            style={{ height: 90 }}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
            onClick={() => {
              postComment();
            }}
          />
        </Form>
      </Comment.Group>
    </div>
  );
};

export default CommentExampleComment;
