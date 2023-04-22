const mongoose = require('mongoose')

// create schema
const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: [true, 'First Name is required']
    },
    lastname:{
        type: String,
        required: [true, 'Last Name is required']
    }, 
    profilePhoto: {
        type: String,
    },
    email:{
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
   
    isBlocked: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    role:{
        type: String,
        enum: ['Admin', 'Guest', 'Editor'],
    },
    viewers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],

    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
        }
    ],
    blocked: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    plan:[{
        type: String, 
        enum: ['Free', 'Premium', 'Pro'],
        default: 'Free'
    }],
    userAward: {
        type: String,
        enum: ['Bronze', 'Sliver', 'Gold'],
        default: 'Bronze'
    }

},{
    timestamps: true,
    toJSON: { virtuals: true}
});

// get fullname 
userSchema.virtual("fullname").get(function () {
    return `${this.firstname} ${this.lastname}`
})

// initials
userSchema.virtual('initials').get(function (){
    return `${this.firstname[0]}${this.lastname[0]}`
})

// post count
userSchema.virtual('postCount').get(function (){
    return this.posts.length
})

// follower count
userSchema.virtual('followersCount').get(function () {
    return this.followers.length;
})

// following count
userSchema.virtual('followingCount').get(function () {
    return this.following.length;
})

// get views count
userSchema.virtual('viewersCount').get(function (){
    return this.viewers.length;
})

// get blocked count
userSchema.virtual('blockedCount').get(function (){
    return this.blocked.length;
})


// Compile the user model
const User = mongoose.model('User', userSchema)

module.exports = User;