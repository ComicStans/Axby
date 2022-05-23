
export default function Profile(props) {
    return `

<head>
    

    <title>Profile!</title>
    <style>
        .img-circle {
    border-radius: 100%;
    border: 4px solid ;
}  
    </style>
  </head>
      
       <main>
            <h1>Profile</h1>
            
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h1 class="displayUsername">User Name</h1>
                        <img class="img-circle " src="https://randomuser.me/api/portraits/women/10.jpg" alt="Random user">
                        <br>
                        
                        <!-- Button trigger for add friend modal -->
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                         Add Friend
                        </button>
                        
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Confirm Friend Request</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                Are you sure you want to send " " a friend request?
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-primary">Confirm</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#blockUser">
                          Block
                        </button>
                        
                        <!-- Modal -->
                        <div class="modal fade" id="blockUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Block User</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div class="modal-body">
                                Are you sure you want to block " " ?
                                You will no longer see their profile, boards or receive messages from them.
                              </div>
                              <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="button" class="btn btn-primary">Confirm</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <br>
                        <h2>About Me</h2>
                        
                            <button type="button" class="btn " id="edit-button"><i class="fas fa-edit"></i></button>
                            <button type="button" class="btn " id="end-editing"><i class="far fa-save"></i></button>                               
                            
                            <p id="aboutMe">
                           
                                I have a pen
                                I have an apple
                                Ah
                                Apple pen
                                I have a pen
                                I have pineapple
                                Ah
                                Pineapple pen
                                Apple pen
                                Pineapple pen
                                Ah
                                Pen Pineapple Apple Pen
                                Pen Pineapple Apple Pen
                            </p>
                            
                        <h2>Friend List</h2>
                            <ul class="friendList" >
                            ${props.profile.connection.map(connection => {
                            return `<li id="friend-${connection.id}"> <a href="#">${connection.request}</a></li>`}).join('')}
                            </ul>
                        <h2>Wish List</h2>
                            <ul class="wishList" >
                                <li id="list-item1"> <a href="#">Sonic</a></li>
                                <li id="list-item2"> <a href="#">Super Mario</a></li>
                                <li id="list-item3"> <a href="#">Aladin</a></li>
                                <li id="list-item4"> <a href="#">Duck hunter</a></li>
                                <li id="list-item5"> <a href="#">Street Fighter</a></li>
                                <li id="list-item6"> <a href="#">Lion King</a></li>
                            </ul>
                    </div>
                   
                    <div class="col">
                         <h1>My Collection</h1>
                         <!-- Small button groups (default and split) -->
                            <div class="btn-group dropdown">
                              <button class="btn btn-secondary btn-sm dropdown-toggle" id="dropdownMenuLink" type="button" data-toggle="dropdown" aria-expanded="false">
                                Game Category
                              </button>
                              
                               <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                              </div>
                              
                              
                              
                            </div>
                            
                    </div>
                </div>
            </div>
    
    
    
    
               
                 
                  
                  
                     
           
                </main>
    
    `;
}
export function ProfileEvents() {
    $(document).ready(function () {

        $('#edit-button').click(function () {
            console.log(true)
            $('#aboutMe').attr('contenteditable', 'true')
        });

        $('#end-editing').click(function () {
            console.log(false)
            $('#aboutMe').attr('contenteditable', 'false')
        })
    })
}