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
let example = {
    id: '21',
    description: 'Description 21',
    createdAt: new Date('2020-03-9T23:00:00'),
    author: 'Author 21',
    photoLink: 'https://www.pressball.by/images/stories/2020/03/202003102315422.jpg'
 };

const MAX_DESCRIPTION_LENGTH = 200;
const DEFAULT_SKIP = 0;
const DEFAULT_TOP = 10;


class PostList {
    
    
    _posts = [];

    constructor(posts) {
        this._posts = posts;
    }

    static validate(post) {
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

    getPage(skip = DEFAULT_SKIP, top = DEFAULT_TOP, filterConfig = {}) {
        if (skip < 0 || skip > this._posts.length) {
            return [];
        }

        if (top < 0) {
            return [];
        }

        const slicedPosts = this._posts.sort((firstPost, secondPost) => secondPost.createdAt - firstPost.createdAt).slice(skip, top + skip);

        if (typeof filterConfig !== 'object') {
            return slicedPosts;
        }

        return slicedPosts.filter((post) => {
            return (!filterConfig.id || filterConfig.id === post.id)
                && (!filterConfig.description || filterConfig.description === post.description)
                && (!filterConfig.createdAt || filterConfig.createdAt.getTime() === post.createdAt.getTime())
                && (!filterConfig.author || filterConfig.author === post.author);
        })
    }

    add(post) {
        if (!this.constructor.validate(post)) {
            return false;
        }

        this._posts.push(post);

        return true;
    }

    edit(id, post) {
        if (!post || !id) {
            return false;
        }

        const currentPost = this.getPost(id);

        if (!currentPost) {
            return false;
        }

        const newPost = { ...currentPost, post };

        if (!this.constructor.validate(currentPost)) {
            return false;
        }

        this._posts[this._posts.indexOf(currentPost)] = newPost;
        
        return true;
    }

    remove(id) {
        const post = this.getPost(id);

        if (!post) {
            return false;
        }

        return !!this._posts.slice(this._posts.indexOf(post), 1);
    }

    addAll(newPosts) {
        return newPosts.reduce((invalidedPosts, newPost) => {
            if (!this.add(newPost)) {
                invalidedPosts = [...invalidedPosts, newPost];

                return invalidedPosts;
            }
        }, [])
    }


    getPage() {
        console.log(".....getPost testing.....");
        console.log("\n");
        console.log("with valid id:");
        console.log(this.getPage('3'));
        console.log("\n");
        console.log("with invalid id:");
        console.log(this.getPage(0));
        console.log("\n");
        console.log("\n");
      }
    
      validate() {
        console.log(".....validatePost testing.....");
        console.log("with invalid post:");
        console.log(PostList.validate(1));
        console.log("\n");
        console.log("\n");
      }
    
      add() {
        console.log(".....addPost testing.....");
        console.log("\n");
        console.log("with valid post:");
        console.log(this.add(example));
        console.log("\n");
        console.log("with invalid post:");
        console.log(this.add(0));
        console.log("\n");
        console.log("\n");
      }
    
      edit() {
        console.log(".....editPost testing.....");
        console.log("\n");
        console.log("with valid post and ID:");
        console.log(this.edit("1", example));
        console.log("\n");
        console.log("with invalid post:");
        console.log(this.edit("1", {description: 1441}));
        console.log("\n");
        console.log("with invalid ID:");
        console.log(this.edit(0, example));
        console.log("\n");
        console.log("\n");
      }
    
      remove() {
        console.log(".....removePost testing.....");
        console.log("\n");
        console.log("with valid ID:");
        console.log(this.remove(20));
        console.log("\n");
        console.log("with invalid ID:");
        console.log(this.remove(30));
        console.log("\n");
        console.log("\n");
      }

    
      addAll() {
        console.log(".....addAll testing.....");
        console.log("\n");
        var testPostArray = [
          {
            id: '22',
            description: 'Description 22',
            createdAt: new Date('2020-03-9T23:00:00'),
            author: 'Author 22',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/202003102315422.jpg'
          },
          {
            id: '23',
            description: 'Description 23',
            createdAt: new Date('2020-03-9T23:00:00'),
            author: 'Author 23',
            photoLink: 'https://www.pressball.by/images/stories/2020/03/202003102315422.jpg'
          }
        ];
        console.log(this.addAll(testPostArray));
      }
    
}