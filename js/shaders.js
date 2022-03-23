/**
 * Shaders
 */
var vertexShader = gl.createShader(gl.VERTEX_SHADER)
gl.shaderSource(vertexShader, [
  'attribute vec4 a_position;',
  'attribute vec3 a_normal;',
  'attribute vec4 a_color;',

  'uniform mat4 u_normal;',
  'uniform mat4 u_matrix;',
  'uniform mat4 u_projection;',

  'varying highp vec3 v_lighting;',
  'varying lowp vec4 v_color;',

  'void main()',
  '{',
   '  gl_Position = u_projection * u_matrix * a_position;',
  '  v_color = a_color;',

  'highp vec3 ambient_light = vec3(0.3, 0.3, 0.3);',
  'highp vec3 directional_light_color = vec3(1, 1, 1);',
  'highp vec3 directional_light_direction = vec3(0.85, 0.8, 0.75);',
   'highp vec4 transformed_normal = u_normal * vec4(a_normal, 1.0);',

  'highp float directional = max(dot(transformed_normal.xyz, directional_light_direction), 0.0);',
   'v_lighting = ambient_light + (directional_light_color * directional);',
  '}'
  ].join('\n'))
gl.compileShader(vertexShader)

var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)
gl.shaderSource(fragmentShader, [
  'varying highp vec3 v_lighting;',
  'varying lowp vec4 v_color;',
  
  'uniform bool u_shading;',

  'void main()',
  '{',
  '  if (u_shading) {',
  '    gl_FragColor = vec4(v_lighting * v_color.rgb, v_color.a);',
  '  } else {',
  '    gl_FragColor = v_color;',
  '  }',
  '}'
  ].join('\n'))
gl.compileShader(fragmentShader)

var program = gl.createProgram()
gl.attachShader(program, vertexShader)
gl.attachShader(program, fragmentShader)
gl.linkProgram(program)
gl.useProgram(program)