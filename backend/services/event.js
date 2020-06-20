const mongoose = require('mongoose');

const Event = require('../model/event.model');

exports.addEvent = async function(req,res){
    try {
        let event = new Event(req.body.event);
        let savedEvent = await event.save();
        res.json({success:true, data:savedEvent});
    } catch(e){
        res.json({success:false, error:e});
    }
}


exports.searchEvent = async function(req,res){
    try {
        let query = generateSearchQuery(req.query);
        console.log(`Request handled by`,process.pid);
        let response =  await Event.find(query).lean();
        res.json({success:true, data:response});
    } catch(e){
        console.log(e);
        res.json({success:false, error:e});
    }
}


function generateSearchQuery(query){
    let searchQuery = {};
    if(query.email){
        searchQuery.email = {$regex:query.email,$options:'i'}; 
    }
    if(query.environment){
        searchQuery.environment = {$regex:query.environment,$options:'i'}; 
    }
    if(query.component){
        searchQuery.component = {$regex:query.component,$options:'i'}; 
    }
    if(query.message){
        searchQuery.message = {$regex:query.message,$options:'i'}; 
    }
    if(query.date){
        console.log(query.date);
        searchQuery.createdAt = {$gte:new Date(+query.date)}; 
    }
    return searchQuery;
}