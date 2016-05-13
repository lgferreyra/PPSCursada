<?php
if(!defined("SPECIALCONSTANT")) die("Acceso denegado");
// var_dump($app);

// GET: Para consultar y leer recursos
// POST: Para crear recursos
// PUT: Para editar recursos
// DELETE: Para eliminar recursos

// GET: Para consultar y leer recursos

$app->get("/personas/", function() use($app)
{	
	$item[0]['nombre'] = "nombre";
	$item[0]['apellido'] = "apellido";
	$item[1]['nombre'] = "otro nombre";
	$item[1]['apellido'] = "otro apellido";	
	// $lista = array();
	$lista = $item;
	// $lista = $item1;
	$app->response->headers->set("Content-type", "application/json");
	$app->response->status(200);
	$app->response->body(json_encode($lista));
});

$app->get("/personas/:id", function($id) use($app)
{
	$item[0]['nombre'] = "nombre $id";
	$item[0]['apellido'] = "apellido $id";

	$app->response->headers->set("Content-type", "application/json");
	$app->response->status(200);
	$app->response->body(json_encode($item));
});

// POST: Para crear recursos
$app->post("/personas/", function() use($app)
{
	$nombre = $app->request->post("nombre");
	
	// Recibo los datos del post en $app->request->getBody() 
	$data = json_decode($app->request->getBody());
	$nombre = $data->nombre;
	
	$app->response->headers->set("Content-type", "application/json");
	$app->response->status(200);	
	$app->response->body(json_encode($nombre));
});

// PUT: Para editar recursos
$app->put("/personas/:id", function($id) use($app)
{
	
	$app->response->headers->set("Content-type", "application/json");
	$app->response->status(200);
	$app->response->body(json_encode($id));
});
// DELETE: Para eliminar recursos
$app->delete("/personas/:id", function($id) use($app)
{
	try{
		

		$app->response->headers->set("Content-type", "application/json");
		$app->response->status(200);
		$app->response->body(json_encode($id));
	}
	catch(PDOException $e)
	{
		echo "Error: " . $e->getMessage();
	}
});