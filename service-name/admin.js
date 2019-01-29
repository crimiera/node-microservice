// admin.js 
admin = db.getSiblingDB("admin"); 

// creation of the admin user 
admin.createUser(
  {
    user: "shlomi",
    pwd: "1qazxsw2",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
) 
admin.grantRolesToUser( "shlomi", [ "root" , { role: "root", db: "admin" } ] )

// let's authenticate to create the other user 
db.getSiblingDB("admin").auth("shlomi", "1qazxsw2") 

// creation of the replica set admin user 
db.getSiblingDB("admin").createUser(
  {
    "user" : "replicaAdmin",
    "pwd" : "1qazxsw2",
    roles: [ { "role" : "clusterAdmin", "db" : "admin" } ]
  }
)
