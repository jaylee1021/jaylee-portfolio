import React from "react";
import Box from "@cloudscape-design/components/box";
import StatusIndicator from "@cloudscape-design/components/status-indicator";

export default function ConsoleFooter() {
    return (
        <div
            style={{
                position: "fixed",      // 1. Fix to viewport
                bottom: 0,              // 2. Anchor to bottom
                left: 0,                // 3. Anchor to left edge
                right: 0,               // 4. Stretch to right edge
                zIndex: 1000,           // 5. Ensure it sits on top of other elements
                borderTop: "1px solid #ffffffff",
                backgroundColor: "#161d26"
            }}
        >
            <Box padding={{ vertical: "xs", horizontal: "l" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: "28px" // Keep it slim like a status bar
                    }}
                >
                    {/* LEFT */}
                    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                        <span style={{ fontSize: "12px", color: "#d1d5db" }}>
                            © 2026 Jay Lee Systems. All rights reserved.
                        </span>
                    </div>

                    {/* RIGHT */}
                    <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                        <span style={{ fontSize: "12px", color: "#d1d5db" }}>
                            Build v2.1.0 (Stable)
                        </span>
                        <StatusIndicator type="success">Ready</StatusIndicator>
                    </div>
                </div>
            </Box>
        </div>
    );
}