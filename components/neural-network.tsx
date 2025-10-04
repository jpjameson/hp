"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  label: string
  category: string
}

interface Connection {
  from: number
  to: number
  label: string
  opacity: number
  age: number
}

export function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    updateSize()
    window.addEventListener("resize", updateSize)

    // Expanded coaching vocabulary with categories - UPDATED with better words
    const coachingData = [
      // Core Concepts (kept the best ones)
      { label: "Breakthrough", category: "core" },
      { label: "Challenge", category: "core" },
      { label: "Growth", category: "core" },
      { label: "Insight", category: "core" },
      { label: "Pattern", category: "core" },
      { label: "Goal", category: "core" },
      { label: "Progress", category: "core" },
      { label: "Clarity", category: "core" },
      { label: "Transformation", category: "core" },
      { label: "Awareness", category: "core" },
      { label: "Strength", category: "core" },
      { label: "Resilience", category: "core" },
      
      // Emotional States (UPDATED with more accessible words)
      { label: "Confidence", category: "emotion" },
      { label: "Worry", category: "emotion" }, // was "Fear"
      { label: "Joy", category: "emotion" },
      { label: "Stress", category: "emotion" }, // was "Anxiety"
      { label: "Hope", category: "emotion" },
      { label: "Uncertainty", category: "emotion" }, // was "Doubt"
      { label: "Courage", category: "emotion" },
      { label: "Openness", category: "emotion" }, // was "Vulnerability"
      { label: "Empowerment", category: "emotion" },
      { label: "Frustration", category: "emotion" },
      { label: "Gratitude", category: "emotion" },
      { label: "Commitment", category: "emotion" }, // was "Determination"
      
      // Process Elements (UPDATED with more compelling words)
      { label: "Discovery", category: "process" }, // was "Reflection"
      { label: "Action", category: "process" },
      { label: "Understanding", category: "process" }, // was "Learning"
      { label: "Implementation", category: "process" }, // was "Practice"
      { label: "Support", category: "process" }, // was "Feedback"
      { label: "Adaptation", category: "process" }, // was "Adjustment"
      { label: "Commitment", category: "process" },
      { label: "Consistency", category: "process" },
      { label: "Persistence", category: "process" },
      { label: "Patience", category: "process" },
      { label: "Focus", category: "process" },
      { label: "Structure", category: "process" }, // was "Discipline"
    ]

    // Semantic triples - meaningful relationships between specific concepts
    const semanticTriples = [
      // POSITIVE RELATIONSHIPS
      
      // Core → Process → Emotion
      { from: "Challenge", to: "Courage", label: "unlocks" },
      { from: "Goal", to: "Commitment", label: "requires" },
      { from: "Pattern", to: "Understanding", label: "generates" },
      { from: "Progress", to: "Confidence", label: "nurtures" },
      { from: "Breakthrough", to: "Joy", label: "empowers" },
      { from: "Clarity", to: "Focus", label: "enables" },
      { from: "Transformation", to: "Empowerment", label: "creates" },
      { from: "Awareness", to: "Insight", label: "leads to" },
      { from: "Strength", to: "Resilience", label: "builds" },
      { from: "Growth", to: "Joy", label: "brings" },
      
      // Emotion → Process → Core
      { from: "Worry", to: "Support", label: "needs" },
      { from: "Stress", to: "Resilience", label: "unlocks" },
      { from: "Uncertainty", to: "Clarity", label: "requires" },
      { from: "Openness", to: "Insight", label: "generates" },
      { from: "Frustration", to: "Patience", label: "nurtures" },
      { from: "Hope", to: "Action", label: "inspires" },
      { from: "Gratitude", to: "Joy", label: "amplifies" },
      { from: "Confidence", to: "Breakthrough", label: "enables" },
      { from: "Joy", to: "Resilience", label: "strengthens" },
      { from: "Courage", to: "Growth", label: "enables" },
      
      // Process → Core → Emotion
      { from: "Discovery", to: "Awareness", label: "leads to" },
      { from: "Implementation", to: "Confidence", label: "builds" },
      { from: "Adaptation", to: "Flexibility", label: "creates" },
      { from: "Structure", to: "Consistency", label: "supports" },
      { from: "Focus", to: "Breakthrough", label: "enables" },
      { from: "Discovery", to: "Insight", label: "generates" }, // was "Reflection"
      { from: "Implementation", to: "Mastery", label: "develops" }, // was "Practice"
      { from: "Support", to: "Growth", label: "nurtures" }, // was "Feedback"
      { from: "Support", to: "Confidence", label: "builds" },
      { from: "Patience", to: "Understanding", label: "develops" },
      
      // Core → Core relationships
      { from: "Challenge", to: "Growth", label: "facilitates" },
      { from: "Goal", to: "Progress", label: "drives" },
      { from: "Pattern", to: "Insight", label: "reveals" },
      { from: "Awareness", to: "Transformation", label: "enables" },
      { from: "Progress", to: "Breakthrough", label: "leads to" },
      { from: "Clarity", to: "Action", label: "enables" },
      
      // Emotion → Emotion relationships
      { from: "Courage", to: "Confidence", label: "builds" },
      { from: "Patience", to: "Understanding", label: "develops" },
      { from: "Openness", to: "Growth", label: "enables" },
      { from: "Gratitude", to: "Joy", label: "amplifies" },
      { from: "Hope", to: "Courage", label: "inspires" },
      { from: "Joy", to: "Confidence", label: "reinforces" },
      { from: "Resilience", to: "Strength", label: "builds" },
      
      // Process → Process relationships
      { from: "Discovery", to: "Implementation", label: "leads to" },
      { from: "Discovery", to: "Action", label: "inspires" }, // was "Reflection"
      { from: "Implementation", to: "Mastery", label: "develops" }, // was "Practice"
      { from: "Focus", to: "Breakthrough", label: "enables" },
      { from: "Support", to: "Growth", label: "nurtures" },
      { from: "Support", to: "Improvement", label: "enables" }, // was "Feedback"
      
      // NEGATIVE/INHIBITING RELATIONSHIPS
      
      // Negative emotions inhibiting growth
      { from: "Frustration", to: "Growth", label: "inhibits" },
      { from: "Worry", to: "Progress", label: "blocks" },
      { from: "Stress", to: "Clarity", label: "clouds" },
      { from: "Uncertainty", to: "Confidence", label: "undermines" }, // was "Doubt"
      { from: "Worry", to: "Action", label: "prevents" }, // was "Fear"
      { from: "Stress", to: "Focus", label: "disrupts" }, // was "Anxiety"
      
      // Negative patterns
      { from: "Uncertainty", to: "Progress", label: "slows" },
      { from: "Patience", to: "Frustration", label: "reduces" },
      { from: "Structure", to: "Chaos", label: "prevents" },
      { from: "Structure", to: "Procrastination", label: "overcomes" }, // was "Discipline"
      
      // COMPLEX RELATIONSHIPS
      
      // Paradoxical relationships
      { from: "Openness", to: "Strength", label: "creates" }, // was "Vulnerability"
      { from: "Failure", to: "Understanding", label: "enables" }, // was "Learning"
      { from: "Struggle", to: "Resilience", label: "builds" },
      { from: "Discomfort", to: "Growth", label: "facilitates" },
      
      // Transformational relationships
      { from: "Breakthrough", to: "Transformation", label: "triggers" },
      { from: "Insight", to: "Change", label: "enables" },
      { from: "Understanding", to: "Acceptance", label: "leads to" },
      { from: "Awareness", to: "Choice", label: "enables" },
      
      // Supportive relationships
      { from: "Support", to: "Courage", label: "nurtures" },
      { from: "Encouragement", to: "Confidence", label: "builds" },
      { from: "Guidance", to: "Clarity", label: "provides" },
      { from: "Feedback", to: "Improvement", label: "enables" },
      
      // Energy and momentum
      { from: "Momentum", to: "Progress", label: "accelerates" },
      { from: "Energy", to: "Action", label: "fuels" },
      { from: "Motivation", to: "Commitment", label: "sustains" },
      { from: "Inspiration", to: "Breakthrough", label: "sparks" },
      
      // Additional creative combinations
      { from: "Joy", to: "Resilience", label: "strengthens" },
      { from: "Gratitude", to: "Happiness", label: "amplifies" },
      { from: "Courage", to: "Fear", label: "overcomes" },
      { from: "Hope", to: "Despair", label: "dispels" },
      { from: "Love", to: "Healing", label: "enables" },
      { from: "Wisdom", to: "Peace", label: "brings" },
      { from: "Forgiveness", to: "Freedom", label: "grants" },
      { from: "Acceptance", to: "Peace", label: "leads to" }
    ]

    // Create nodes with brand colors and categories
    const colors = {
      core: "rgba(147, 51, 234, 0.4)", // purple - reduced opacity
      emotion: "rgba(236, 72, 153, 0.4)", // pink - reduced opacity
      process: "rgba(59, 130, 246, 0.4)", // blue - reduced opacity
    }

    const nodes: Node[] = []
    const nodeCount = 24 // Reduced from 36

    // Create nodes with better distribution
    for (let i = 0; i < nodeCount; i++) {
      const data = coachingData[i % coachingData.length]
      
      // Better distribution algorithm - avoid clustering
      let x, y, attempts = 0
      do {
        x = Math.random() * (canvas.width - 200) + 100 // Keep away from edges
        y = Math.random() * (canvas.height - 200) + 100
        attempts++
      } while (attempts < 50 && nodes.some(node => {
        const dx = x - node.x
        const dy = y - node.y
        return Math.sqrt(dx * dx + dy * dy) < 80 // Minimum distance between nodes
      }))
      
      nodes.push({
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 0.4, // Slightly faster movement
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 5, // Slightly larger for better visibility
        color: colors[data.category as keyof typeof colors],
        label: data.label,
        category: data.category,
      })
    }

    const connections: Connection[] = []
    const connectionDistance = 200 // Reduced for better spread
    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update connections
      connections.forEach((conn, index) => {
        conn.age += 1
        conn.opacity = Math.max(0, 1 - conn.age / 120) // Fade over 2 seconds at 60fps
        
        if (conn.opacity <= 0) {
          connections.splice(index, 1)
        }
      })

      // Check for new connections and draw existing ones
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.8
            
            // Always draw connection line for nearby nodes
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(147, 51, 234, ${opacity * 0.3})` // Reduced opacity
            ctx.lineWidth = 1
            ctx.stroke()
            
            // Check if this is a valid semantic triple for labeling
            const validTriple = semanticTriples.find(triple => 
              (triple.from === nodes[i].label && triple.to === nodes[j].label) ||
              (triple.from === nodes[j].label && triple.to === nodes[i].label)
            )
            
            // Check if connection already exists
            const existingConnection = connections.find(conn => 
              (conn.from === i && conn.to === j) || (conn.from === j && conn.to === i)
            )
            
            if (!existingConnection && Math.random() < 0.25) { // 25% chance for any connection
              let connectionLabel = ""
              
              if (validTriple) {
                // Use semantic triple label
                connectionLabel = validTriple.label
              } else {
                // Use fallback generic labels
                const fallbackLabels = [
                  "connects", "relates", "links", "associates", "correlates",
                  "influences", "affects", "impacts", "shapes", "forms"
                ]
                connectionLabel = fallbackLabels[Math.floor(Math.random() * fallbackLabels.length)]
              }
              
              connections.push({
                from: i,
                to: j,
                label: connectionLabel,
                opacity: opacity,
                age: 0
              })
            }

            // Draw connection label for any existing connection
            if (existingConnection && existingConnection.opacity > 0.3) {
              const midX = (nodes[i].x + nodes[j].x) / 2
              const midY = (nodes[i].y + nodes[j].y) / 2
              
              ctx.font = "9px Inter, sans-serif" // Smaller font for edge labels
              ctx.fillStyle = `rgba(120, 120, 120, ${existingConnection.opacity * 0.4})` // More subtle edge labels
              ctx.textAlign = "center"
              ctx.fillText(existingConnection.label, midX, midY - 5)
            }
          }
        }
      }

      // Update and draw nodes
      nodes.forEach((node) => {
        // Update position
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Keep within bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))

        // Draw node with glow
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.fill()

        // Add glow effect
        ctx.shadowBlur = 10 // Reduced glow
        ctx.shadowColor = node.color
        ctx.fill()
        ctx.shadowBlur = 0

        // Draw label
        ctx.font = "10px Inter, sans-serif" // Slightly smaller font
        ctx.fillStyle = "rgba(100, 100, 100, 0.5)" // Reduced text opacity
        ctx.textAlign = "left"
        ctx.fillText(node.label, node.x + node.radius + 6, node.y + 3)
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", updateSize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" style={{ background: "transparent" }} />
}
