import React from "react";
import { Comment } from "./Comment";

const commentsData = [
  {
    name: "Surya",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, iste?",
    replies: [
      {
        name: "Surya",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, iste?",
        replies: [
          {
            name: "Surya",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, iste?",
            replies: [
              {
                name: "Surya",
                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, iste?",
                replies: [
                  {
                    name: "Surya",
                    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, iste?",
                    replies: [
                      {
                        name: "Surya",
                        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, iste?",
                        replies: [
                          {
                            name: "Surya",
                            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, iste?",
                            replies: [
                              {
                                name: "Surya",
                                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, iste?",
                                replies: [],
                              },
                              {
                                name: "Surya",
                                text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, iste?",
                                replies: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Akshay Saini",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam, iste?",
    replies: [],
  },
];

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          {comment.replies?.length > 0 && (
            <div className="pl-6 border-l border-gray-300 ml-2">
              <CommentsList comments={comment.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export const CommentsContainer = () => {
  return (
    <div className="mx-4">
      <h1 className="font-bold">Comments</h1>
      <CommentsList comments={commentsData}></CommentsList>
    </div>
  );
};
