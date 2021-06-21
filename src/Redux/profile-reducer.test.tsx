import profileReducer, {addPostAC, ProfilePageType, removePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";

let state: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 156},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
        {id: 3, message: 'BlaBla', likesCount: 10},
        {id: 4, message: 'I am happy!', likesCount: 90},
    ],
    profile: null,
    status: ""
}


test('length of posts should be incremented', () => {

    //1.готовим исходные данные- test date

    let action = addPostAC("Hello")


    //2.action
    let newState = profileReducer(state, action)

    //3. проверяем что у наше ожидание-expectation
   //newState.posts.length === 5
    expect(newState.posts.length).toBe(5)
});


test('message  of new posts should be correct', () => {

    //1.готовим исходные данные- test date

    let action = addPostAC("Hello")

    //2.action
    let newState = profileReducer(state, action)

    //3. проверяем что у наше ожидание-expectation
    //newState.posts.length === 5
    expect(newState.posts[4].message).toBe("Hello")
});

//tdd
test('after deleting length of message should be decrement', () => {

    //1.готовим исходные данные- test date

    let action = removePost(1)

    //2.action
    let newState = profileReducer(state, action)

    //3. проверяем что у наше ожидание-expectation
    //newState.posts.length === 5
    expect(newState.posts.length).toBe(3)
});

test(`after deleting length shouldn't be decrement if id is  incorrect`, () => {

    //1.готовим исходные данные- test date

    let action = removePost(100)

    //2.action
    let newState = profileReducer(state, action)

    //3. проверяем что у наше ожидание-expectation
    //newState.posts.length === 5
    expect(newState.posts.length).toBe(4)
})