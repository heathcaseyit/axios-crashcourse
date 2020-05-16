// GET Request
function getTodos(){
    axios({
        method:'GET',
        url:'https://jsonplaceholder.typicode.com/todos'
    })
    .then(res=>showOutput(res))
    .catch(err => console.log(err));
}

// POST Request
function addTodo(){
    console.log('POST Request');
}

// PUT/PATCH Request
function updateTodo(){
    console.log('PUT/PATCH Request');
}

// DELETE Request
function deleteTodo(){
    console.log('DELETE Request');
}

// Simultaneous Data
function getData(){
    console.log('Simultaneous Request');
}

// Custom Headers
function customHeaders(){
    console.log('Custom Headers');
}

// Transforming Request
function transformResponse(){
    console.log('Transform Response');
}

// Error Handling
function errorHandling(){
    console.log('Error Handling');
}

// Cancel Token
function cancelToken(){
    console.log('Cancel Token');
}

// INTERCEPTING REQUEST & RESPONSES

// AXIOS INSTANCES

// Show output in browser
function showOutput(res){
    document.getElementById('res').innerHTML=`
    <div class="card card-body mb-4">
        <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
        <div class="card-header">
            Headers
        </div>
        <div class="card-body">
            <pre>${JSON.stringify(res.headers, null, 2)}</pre>
        </div>
    </div>
    <div class="card mt-3">
        <div class="card-header">
            Data
        </div>
        <div class="card-body">
            <pre>${JSON.stringify(res.data, null, 2)}</pre>
        </div>
    </div>
    <div class="card mt-3">
        <div class="card-header">
            Config
        </div>
        <div class="card-body">
            <pre>${JSON.stringify(res.config, null, 2)}</pre>
        </div>
    </div>
    `;
}

// Event Listeners
document.getElementById('get').addEventListener('click',getTodos);
document.getElementById('post').addEventListener('click',addTodo);
document.getElementById('update').addEventListener('click',updateTodo);
document.getElementById('delete').addEventListener('click',deleteTodo);
document.getElementById('sim').addEventListener('click',getData);
document.getElementById('headers').addEventListener('click',customHeaders);
document.getElementById('transform').addEventListener('click',transformResponse);
document.getElementById('error').addEventListener('click',errorHandling);
document.getElementById('cancel').addEventListener('click',cancelToken);