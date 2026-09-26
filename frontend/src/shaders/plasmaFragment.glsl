uniform vec3 uColorBottom;
uniform vec3 uColorMiddle;
uniform vec3 uColorTop;

varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying float vDisplacement;

void main() {
    float height = clamp(vNormal.y * 0.5 + 0.5, 0.0, 1.0);
    vec3 lowerGradient = mix(uColorBottom, uColorMiddle, smoothstep(0.0, 0.55, height));
    vec3 gradient = mix(lowerGradient, uColorTop, smoothstep(0.45, 1.0, height));
    float brightness = mix(0.35, 1.0, clamp(vDisplacement, 0.0, 1.0));
    gl_FragColor = vec4(gradient * brightness, 1.0);
}
