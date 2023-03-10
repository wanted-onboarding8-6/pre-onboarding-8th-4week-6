import React, { useEffect } from "react";
import styled from "styled-components";
import { delList, getList } from "../redux/commentSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import type { CommentState, CProps } from "../type/type";

export default function CommentList({
  handleUpdate,
  handlePagination,
  focusNum,
}: CProps) {
  const dispatch = useAppDispatch();
  const comment = useAppSelector((state) => state.comment.comment);

  useEffect(() => {
    dispatch(getList());
    console.log("api calling");
  }, []);

  const handleDelete = (id: number) => {
    dispatch(delList(id));
    dispatch(getList(focusNum));
    handlePagination(1);
  };

  return (
    <>
      {comment?.map((comment: CommentState, key: number) => (
        <Comment key={key}>
          <img src={comment.profile_url} alt="" />

          {comment.author}

          <CreatedAt>{comment.createdAt}</CreatedAt>

          <Content>{comment.content}</Content>

          <Button>
            <button onClick={() => handleUpdate(comment.id!)}>수정</button>
            <button onClick={() => handleDelete(comment.id!)}>삭제</button>
          </Button>

          <hr />
        </Comment>
      ))}
    </>
  );
}

const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > button {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
