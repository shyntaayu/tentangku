
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAYtZkvDCJAyfGgR_8aj-BrlBUfZ98o90c",
    authDomain: "intro-2b6f3.firebaseapp.com",
    databaseURL: "https://intro-2b6f3.firebaseio.com",
    projectId: "intro-2b6f3",
    storageBucket: "intro-2b6f3.appspot.com",
    messagingSenderId: "893093757854",
    appId: "1:893093757854:web:5bc406debf41ee71818c8f"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

  var defaultProject = firebase.initializeApp(firebaseConfig);

console.log("---defaultProject.name", defaultProject.name);

  var ref = firebase.database().ref('/portofolio/project/');                           
  console.log("-----ref", ref);
  ref.once("value", function(snapshot){
      console.log("snapshot", snapshot.val());
      var a = snapshot.val();
      $('#project').innerHTML='ada aku';
      document.getElementById("project").innerHTML =`haloooooo`
      $('#project').html(`
      <div class='col-lg-4 col-md-6 col-sm-6'>
                    <div class='single-work text-center mt-30'>
                        <div class='work-image'>
                            <img src='${a["1"].link}'>
                        </div>
                        <div class='work-overlay'>
                            <div class='work-content'>
                                <h3 class='work-title'>${a["1"].name}</h3>
                                <ul>
                                    <li><a class='image-popup' href='${a["1"].link}'><i
                                                class='lni-plus'></i></a></li>
                                    <li><a href='#'><i class='lni-link'></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                `);
    // output.innerHTML = JSON.stringify(snapshot.val(), null, 2);
});