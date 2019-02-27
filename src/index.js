import React from 'react';
import ReacDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail
                author={faker.name.firstName()}
                timeAgo="Today at 5PM"
                avatar={faker.image.avatar()}
                content={faker.lorem.sentence()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                author={faker.name.firstName()}
                timeAgo="Today at 7AM"
                avatar={faker.image.avatar()}
                content={faker.lorem.sentence()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                author={faker.name.firstName()}
                timeAgo="3d Ago"
                avatar={faker.image.avatar()}
                    content={faker.lorem.sentence()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                author={faker.name.firstName()}
                timeAgo="5d Ago"
                avatar={faker.image.avatar()}
                content={faker.lorem.sentence()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                author={faker.name.firstName()}
                timeAgo="1m Ago"
                avatar={faker.image.avatar()}
                content={faker.lorem.sentence()} />
            </ApprovalCard>
         </div>
        );
};

ReacDOM.render(<App />, document.querySelector('#root'));