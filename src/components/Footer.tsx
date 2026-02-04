import Box from "@cloudscape-design/components/box";

export default function ConsoleFooter() {
    return (
        <div
            style={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
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
                        height: "28px"
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                        <span style={{ fontSize: "12px", color: "#d1d5db" }}>
                            © 2026 Jay Lee Systems. All rights reserved.
                        </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                        <span style={{ fontSize: "12px", color: "#d1d5db" }}>
                            Build v2.0 (Stable)
                        </span>
                    </div>
                </div>
            </Box>
        </div>
    );
}