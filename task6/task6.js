const posts = [
    {
        id: '1',
        description: 'Description',
        createdAt: new Date('2020-03-19T23:00:00'),
        author: 'Author',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg'
    },
    {
        id: '2',
        description: 'Description 2',
        createdAt: new Date('2020-03-18T23:00:00'),
        author: 'Author 2',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/202003102315422.jpg'
    },
    {
        id: '3',
        description: 'Description 3',
        createdAt: new Date('2020-03-17T23:00:00'),
        author: 'Author 3',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/202003102315422.jpg'
    },
    {
        id: '4',
        description: 'Description 4',
        createdAt: new Date('2020-03-16T23:00:00'),
        author: 'Author 4',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/202003102315422.jpg'
    },
    {
        id: '5',
        description: 'Description 5',
        createdAt: new Date('2020-03-15T23:00:00'),
        author: 'Author 5',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/202003102315422.jpg'
    },
    {
        id: '6',
        description: 'Description 6',
        createdAt: new Date('2020-03-14T23:00:00'),
        author: 'Author 6',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/202003102315422.jpg'
    },
    {
        id: '7',
        description: 'Description 7',
        createdAt: new Date('2020-03-13T23:00:00'),
        author: 'Author 7',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/202003102315422.jpg'
    },
    {
        id: '8',
        description: 'Description 8',
        createdAt: new Date('2020-03-12T23:00:00'),
        author: 'Author 8',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/202003102315422.jpg'
    },
    {
        id: '9',
        description: 'Description 9',
        createdAt: new Date('2020-03-11T23:00:00'),
        author: 'Author 9',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/202003102315422.jpg'
    },
    {
        id: '10',
        description: 'Description 10',
        createdAt: new Date('2020-03-10T23:00:00'),
        author: 'Author 10',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/202003102315422.jpg'
    },
    {
        id: '11',
        description: 'Description 11',
        createdAt: new Date('2020-03-9T23:00:00'),
        author: 'Author 11',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/202003102315422.jpg'
    },
    {
        id: '12',
        description: 'Description 12',
        createdAt: new Date('2020-03-9T23:00:00'),
        author: 'Author 12',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/202003102315422.jpg'
    },
    {
        id: '13',
        description: 'Description 13',
        createdAt: new Date('2020-03-9T23:00:00'),
        author: 'Author 13',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/202003102315422.jpg'
    },
    {
        id: '14',
        description: 'Description 14',
        createdAt: new Date('2020-03-9T23:00:00'),
        author: 'Author 14',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/202003102315422.jpg'
    },
    {
        id: '15',
        description: 'Description 15',
        createdAt: new Date('2020-03-9T23:00:00'),
        author: 'Author 15',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/202003102315422.jpg'
    },
    {
        id: '16',
        description: 'Description 16',
        createdAt: new Date('2020-03-9T23:00:00'),
        author: 'Author 16',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/202003102315422.jpg'
    },
    {
        id: '17',
        description: 'Description 17',
        createdAt: new Date('2020-03-9T23:00:00'),
        author: 'Author 17',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/202003102315422.jpg'
    },
    {
        id: '18',
        description: 'Description 18',
        createdAt: new Date('2020-03-9T23:00:00'),
        author: 'Author 18',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/202003102315422.jpg'
    },
    {
        id: '19',
        description: 'Description 19',
        createdAt: new Date('2020-03-9T23:00:00'),
        author: 'Author 19',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/202003102315422.jpg'
    },
    {
        id: '20',
        description: 'Description 20',
        createdAt: new Date('2020-03-9T23:00:00'),
        author: 'Author 20',
        photoLink: 'https://www.pressball.by/images/stories/2020/03/202003102315422.jpg'
    },
];

const postsService = 
(function() {
    example = {
       id: '21',
       description:  'Description 21',
       createdAt: new Date('2000-10-10T05:20:00'),
       author: 'author 21',
       photoLink: 'https://www.pressball.by/images/stories/2020/03/20200310231542.jpg',
      }


    const MAX_DESCRIPTION_LENGTH = 200;
    const DEFAULT_SKIP = 0;
    const DEFAULT_TOP = 10;

    const getPosts = (skip = DEFAULT_SKIP, top = DEFAULT_TOP, filterConfig = {}) => {
        if (skip < 0 || skip > posts.length) {
            return [];
        }

        if (top < 0) {
            return [];
        }

        const slicedPosts = posts.sort((firstPost, secondPost) => secondPost.createdAt - firstPost.createdAt).slice(skip, top + skip);

        if (typeof filterConfig !== 'object') {
            return slicedPosts;
        }

        return slicedPosts.filter((post) => {
            return (!filterConfig.id || filterConfig.id === post.id)
                && (!filterConfig.description || filterConfig.description === post.description)
                && (!filterConfig.createdAt || filterConfig.createdAt.getTime() === post.createdAt.getTime())
                && (!filterConfig.author || filterConfig.author === post.author);
        })
    };

    const getPost = (id) => {
        return posts.find((post) => post.id === id) || null;
    };

    const validatePost = (post) => {
        if (!post) {
            return false;
        }

        const { description, id, createdAt, author, photoLink='' } = post;
        const requiredFieldsExist = id
            && description
            && createdAt
            && author
        const idIsValid = typeof id === 'string' && !getPost(id);
        const descriptionIsValid = typeof description === 'string' && MAX_DESCRIPTION_LENGTH < 200;
        const createdAtIsValid = createdAt instanceof Date && !isNaN(createdAt.getTime());
        const authorIsValid = typeof author === 'string' && author;
        const photoLinkIsValid = typeof photoLink === 'string';

        return requiredFieldsExist
            && idIsValid
            && descriptionIsValid
            && createdAtIsValid
            && authorIsValid
            && photoLinkIsValid;
    }

    const addPost = (post) => {
        if (!validatePost(post)) {
            return false;
        }

        posts.push(post);

        return true;
    }

    const editPost = (id, post) => {
        if (!post || !id) {
            return false;
        }

        const currentPost = getPost(id);

        if (!currentPost) {
            return false;
        }

        const newPost = { ...currentPost, post };

        if (!validatePost(currentPost)) {
            return false;
        }

        posts[posts.indexOf(currentPost)] = newPost;
        
        return true;
    }

    const removePost = (id) => {
        const post = getPost(id);

        if (!post) {
            return false;
        }

        return !!posts.slice(posts.indexOf(post), 1);
    }


    console.log("check post validation\nvalid:");
    console.log(validatePost(posts[0]));
    console.log("invalid:");
    console.log(validatePost(1));
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------");

    console.log('checking getPost');
    console.log("valid:")
    console.log(getPost('1'));
    console.log("invalid:");
    console.log(getPost('0'));
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------");

    console.log("checking adding post");
    console.log("valid:")
    console.log(addPost(example));
    console.log("invalid:")
    console.log(addPost('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven'));
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------");

    console.log("checking editing post");
    console.log("valid:");
    console.log(getPost('21'));
    console.log(editPost('21', {description: 'hello'}));
    console.log(getPost('21'));
    console.log("invalid:")
    console.log(editPost("1", {author: "Mr. Snow"}));
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------");

    console.log("checking removing post");
    console.log("valid:");
    console.log(removePost('20'));
    console.log("invalid:")
    console.log(removePost('21'));
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------");

    console.log("checking getPosts");
    console.log("valid:");
    console.log(getPosts(0, 10, {author: ['Иванов Иван']}));
    console.log('second');
    console.log(getPosts(3, 10, {hashTags:['good']}));
    console.log('third');
    console.log(getPosts(5, 10));
    console.log("invalid:")
    console.log(getPosts(0, 10, {author: 'Васильев Василий'}));
    console.log("-----------------------------------------------------------------------------------------------------------------------------------------");


    return {
        getPosts: getPosts,
        validatePost: validatePost,
        addPost: addPost,
        editPost: editPost,
        removePost: removePost,
    }  
})();